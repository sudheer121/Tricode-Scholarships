const { db } = require("../models")

const express = require("express");
const { compareSync } = require('bcryptjs');
const { sign } = require("jsonwebtoken");

module.exports = {
    login :async (req,res)=>{
        const body = req.body; 
        try {
            const user = await db.User.findAll({ where:{ email: body.email } }); 
            console.log(user); 
            //user.setDataValue('role',user.getRoles());
            if(!user.length){
                return res.json({
                    success:0, 
                    message:"User doesn't exist"
                });
            }
            console.log(user[0].password); 
            if(compareSync(body.password,user[0].password)){ 
                user[0].password = null; 
                return res.json({
                    success:1, 
                    message:"Logged in",
                    result:user[0],
                    jwt: sign({ payload: user[0] }, process.env.JWT_SALT , {
                        expiresIn: process.env.JWT_EXPDATE
                    })
                });
            }
            else {
                throw "Password doesn't match"
            }
            
        } catch(error) {
            console.log(error); 
            return res.json({
                success:0,
                message:"Error logging in",
                error
            });
        }
    }
}