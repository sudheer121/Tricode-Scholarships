const {
    getStudentProfile
} = require("../controllers/student"); 
const { checkToken} = require("../middleware/tokenvalidation");
const { checkRegulator } = require("../middleware/orgValidation"); // regulator is an organization 

const express = require("express");

const router = express.Router();
router.use(express.json());

var organizationCheck = [checkToken, checkRegulator]
router.get("/student/:id",organizationCheck,getStudentProfile); // regulator views profile of student 
module.exports = router 