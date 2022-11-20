const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = async (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) {
        return res.status(401).json({
        errors: [
            {
                msg: "Token not found",
            },
        ],
        });
    }

    try {
        const user =  jwt.verify(token, process.env.JWT_SECRET);
        console.log(user)
        next();
    }catch (error) {
        return res.status(403).json({
        errors: [
            {
            msg: "Invalid token",
            },
        ],
        });
    }
};

module.exports = authToken;