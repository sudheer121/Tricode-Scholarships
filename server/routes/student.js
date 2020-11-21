const {
    fillStudentForm, 
} = require("../controllers/student"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/student",checkToken,fillStudentForm); 

module.exports = router 
