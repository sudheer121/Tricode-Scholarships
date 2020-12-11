const {
    fillStudentForm, 
    getStudentProfile
} = require("../controllers/student"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/student",checkToken,fillStudentForm); // fill form 
router.get("/student/:id",getStudentProfile);       // get profile 

module.exports = router 
