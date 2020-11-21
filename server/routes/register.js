const {
    createUser,
    fillStudentForm 
} = require("../controllers/register"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register",createUser); 
router.post("/studentform",checkToken,fillStudentForm); 

module.exports = router 