const {
    fillStudentForm, 
    getProfile
} = require("../controllers/student"); 
const { checkToken } = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/student",checkToken,fillStudentForm); // fill form 
router.get("/student",checkToken,getProfile);       // get profile  /:id rakhna hai ki nahi ? 

module.exports = router 
