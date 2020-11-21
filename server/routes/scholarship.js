const {
    getScholarships, 
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/getscholarship",getScholarships); 
module.exports = router 