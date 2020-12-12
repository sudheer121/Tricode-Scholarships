const {
    getScholarships, 
    getScholarship,
    applyOnScholarship, 
    studentViewsApplications,

    addScholarship,
    viewScholarshipByRegulator,
    viewApplicationsOnScholarhip, 
    acceptScholarship,
    rejectScholarship,
    payScholarship
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation");
const { checkRegulator } = require("../middleware/orgValidation"); // regulator is an organization 

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/student/scholarships",getScholarships); 
router.get("/student/scholarship/:id",getScholarship); // info about particular scholarship 
router.post("/student/scholarship/:id/apply",checkToken, applyOnScholarship); //student applies for a scholarship having id :id 
router.get("/student/applications",checkToken,studentViewsApplications); 


var organizationCheck = [checkToken, checkRegulator]
router.post("/regulator/scholarships",organizationCheck,addScholarship); //regulator adds scholarship 
router.get("/regulator/scholarships",organizationCheck,viewScholarshipByRegulator); //regulator views scholarships 
router.get("/regulator/scholarships/:id/applications",organizationCheck,viewApplicationsOnScholarhip ); // regulator views applications on particular scholarship 

router.patch("/regulator/applications/:id/accept",organizationCheck,acceptScholarship); 
router.patch("/regulator/applications/:id/reject",organizationCheck,rejectScholarship); 
router.patch("/regulator/applications/:id/pay",organizationCheck,payScholarship); 

module.exports = router 