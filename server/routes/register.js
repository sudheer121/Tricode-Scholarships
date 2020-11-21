const {
    createUser
} = require("../controllers/register"); 

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/register",createUser); 
module.exports = router 