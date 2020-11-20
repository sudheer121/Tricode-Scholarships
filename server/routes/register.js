const {
    getUserByEmail,
    create 
} = require("../models/User");

const { genSaltSync, hashSync } = require('bcryptjs');

const express = require("express");
const router = express.Router();

router.post("/register",async (req,res)=>{
    const body = req.body; 
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);  

    try {
        const result = await getUserByEmail(body.email);
        if(result.length) { 
            throw "email already exists"
        } else {
            const created = await create(body);
            res.json({
                success:1,
                message:"User created"
            }); 
        }
    } catch(error) {
        
        res.json({
            success:0,
            message:error 
        }); 
    }

});

module.exports = router 