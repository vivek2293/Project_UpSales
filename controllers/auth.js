const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { spawn } = require("child_process");
require("dotenv").config();

const asyncWrapper = require("../middleware/async");
const authScheme = require("../models/authScheme");
const { createCustomError } = require("custom-error");
const { rejects } = require("assert");

const allData = asyncWrapper(async (req, res, next) => {
  const data = await authScheme.find({});
  res.status(200).send(data);
});


const privatePost = asyncWrapper(async (req, res, next) => {
    const privatePosts = [
        {
            title: "Post 3",
            content: "Post 3 is private",
        },
        {
            title: "Post 4",
            content: "Post 4 is private",
        },
    ];
    return res.json({ msg:"Verified",privatePosts });
});

const signup = asyncWrapper(async (req, res, next) => {
  const {
    companyName,
    email,
    contactNumber,
    password: plainTextPassword,
    confirmPassword,
  } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);
  const chkPassword = await bcrypt.compare(confirmPassword, password);

  if (!chkPassword) {
    res.status(404);
    return next(createCustomError(`Password Mismatch`, 404));
  }

  try {
    const task = await authScheme
    .create({
      companyName,
      email,
      contactNumber,
      password,
    });

    const token = jwt.sign(
      {
        id: task._id,
        name: task.name,
      },
      process.env.JWT_SECRET
    );
    return res.status(200).json({ accessToken: token, companyName });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ status: "User already present." });
  }

});

const login = asyncWrapper(async (req, res, next) => {
  const { email, password,companyName } = req.body;

  const user = await authScheme.findOne({ email });

  if (!user) {
    res.status(404);
    return next(createCustomError("Wrong Username/Password", 404));
  }

  const chkPassword = await bcrypt.compare(password, user.password);

  if (chkPassword) {
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET
    );
    return res.status(200).json({ accessToken: token, companyName });
  } else {
    res.status(404);
    return next(createCustomError(`Wrong Username/Password`, 404));
  }
});

const predict = asyncWrapper(async(req,res,next) => {
  const {sales, quantity, discount, shippingCost, orderPriority} = req.body;
  console.log(req.body);
  let predict_val = 0;

  await new Promise((resolve,reject) => {
    var pythonfile = spawn("python", ["Predictor.py", sales, quantity, discount, shippingCost, orderPriority]);
    pythonfile.stdout.on("data", (data) => {
      predict_val = `${data}`;
      console.log(`${data}`);
      resolve(true);
    });
    pythonfile.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      resolve(true);
    });
  }).then(() => {
    let ans = "";
    for(let i = 0;i < predict_val.length; i++){
      if(predict_val[i] === '[') continue;
      if(predict_val[i] === ']') break;
      ans += predict_val[i];
    }
    res.json({ value: ans , predict: predict_val});
    res.end();
  });
})

module.exports = { allData, signup, login, privatePost , predict};
