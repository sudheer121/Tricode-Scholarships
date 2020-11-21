const {
    fillStudentForm, 
    getStudentProfile
} = require("../controllers/student"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/student",checkToken,fillStudentForm); 
router.get("/student/:id",getStudentProfile);

module.exports = router 
