const {
    createUser, 
} = require("../controllers/register"); 
const { checkToken} = require("../middleware/tokenvalidation")

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register",createUser); 
module.exports = router 