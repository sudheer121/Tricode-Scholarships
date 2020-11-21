const {
    getScholarships, 
    getScholarship
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/scholarship",getScholarships); 
router.get("/scholarship/:id",getScholarship); 
module.exports = router 