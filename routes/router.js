const express = require("express");
const router = express.Router();

const {allData, signup, login, privatePost, predict} = require("../controllers/auth");
const { companyInfo, companyinfoDelete, companyinfoUpdate, companyinfoTotal, companyinfosalesData, companyinfosinglesalesData,companyinfosalesdataTotal } = require("../controllers/company");


const authToken=require("../middleware/authToken")


router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/private").get(authToken,privatePost);

router.route("/predict").post(predict);

router.route("/create").post(companyInfo); 
router.route("/delete1").delete(companyinfoDelete); 
try {
} catch (error) {
    console.log(error)
}

router.route("/update").patch(companyinfoUpdate);  

router.route("/plotdata").post(companyinfoTotal);

router.route("/salesdata").post(companyinfosalesData);

router.route("/singlesalesdata").post(companyinfosinglesalesData);

router.route("/total").post(companyinfosalesdataTotal);

module.exports = router;