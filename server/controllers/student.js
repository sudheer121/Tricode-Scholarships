const { db } = require("../models");
const express = require("express");
// const { encryptObj,decryptObj } = require("../middleware/encryptor"); 
module.exports = {

    fillStudentForm :async (req,res) => {
        const payload = req.decode.payload;
        let body = req.body; 
        const user_id = payload.id; 
        const updateData = {};
        // console.log(payload);
        // console.log(typeof payload);
        try { 
            // const result = await db.Student.create({
            //     user_id:user_id, 
            //     ...body
            // });
            const exists = await db.Student.findOne({ user_id:user_id}); 
            let result = null; 
            if(exists) {
                result = await exists.update({...body});
            } else {
                result = await db.Student.create({...body,user_id:user_id});
            }
            return res.json({
                success:1,
                message:"Details updated" ,
                result 
            }); 

        } catch(error) {
            console.log(error); 
            res.json({
                success:0,
                error 
            })
        }
        
    },
    getProfile : async(req,res)=>{ //student gets own profile 
        const user_id = req.decode.payload.id;
        try { 
            const result = await db.Student.findOne({ where:{user_id} }); 
            return res.json({
                success:1,
                message:"Profile fetch successful",
                result
            })
        } catch(error) { 
            console.log(error); 
            return res.json({
                success:0,
                message:"Coudn't get profile"
            })
        }
    }, 

    getStudentProfile :async (req,res)=>{
        const user_id = req.params.id;
        try { 
            const student = await db.Student.findOne( {where:{user_id:user_id}} );  
            console.log(student);
            if(student) { 
                return res.json({
                    success:1,
                    student  
                });
            }
            return res.json({success:0, message:"No such student exists"});
            
        } catch(error) {
            console.log(error); 
            res.json({
                success:0,
                error:error 
            }); 
        }
        
    }
}