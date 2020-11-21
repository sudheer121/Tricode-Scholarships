const {
    getScholarships, 
    getScholarship,
    applyOnScholarship 
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/scholarship",getScholarships); 
router.get("/scholarship/:id",getScholarship); 
router.post("/scholarship/:id/apply",checkToken, applyOnScholarship); //student applies for a scholarship having id :id 

module.exports = router 