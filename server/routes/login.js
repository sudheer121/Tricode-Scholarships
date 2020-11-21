const {
    login
} = require("../controllers/login"); 

const express = require("express");

const router = express.Router();
router.use(express.json());

router.post("/login",login); 
module.exports = router 