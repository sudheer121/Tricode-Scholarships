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

router.get("/student/scholarships",getScholarships); 
router.get("/student/scholarship/:id",getScholarship); // info about particular scholarship 
router.post("/student/scholarship/:id/apply",checkToken, applyOnScholarship); //student applies for a scholarship having id :id 

var organizationCheck = [checkToken, checkRegulator]
router.post("/regulator/scholarship/new",organizationCheck,addScholarship);
module.exports = router 