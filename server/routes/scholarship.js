const {
    getScholarships, 
    getScholarship,
    applyOnScholarship, 
    addScholarship
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation");
const { checkRegulator } = require("../middleware/orgValidation"); // regulator is an organization 

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/scholarships",getScholarships); 
router.get("/scholarship/:id",getScholarship); // info about particular scholarship 
router.post("/scholarship/:id/apply",checkToken, applyOnScholarship); //student applies for a scholarship having id :id 

//router.use("/regulator/scholarship/new",checkToken);
//router.use("/regulator/scholarship/new",checkAdmin); 
var organizationCheck = [checkToken, checkRegulator]
router.post("/regulator/scholarship/new",organizationCheck,addScholarship);
module.exports = router 