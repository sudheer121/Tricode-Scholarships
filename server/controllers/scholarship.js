const models = require("../models")
const { db } = require("../models")

module.exports = {
    getScholarships:async (req,res) => {
        const list = await db.Scholarship.findAll();
        console.log(list); 
        res.json({
            success:1,
            list 
        })
    },

    getScholarship: async (req,res)=>{
        const id = req.params.id;
        try { 
            const result = await db.Scholarship.findOne( {where:{id:id}} );  
            console.log(result); 
            res.json({
                success:1,
                result  
            });
        } catch(error) {
            console.log(error); 
            res.json({
                success:0,
                error:error 
            }); 
        }
        
    },

    addScholarship: async (req, res) => {
        const payload = req.decode.payload;
        let body = req.body;
        const organisation_id = payload.organisation_id;
        try {
            const result = await db.Scholarship.create({
                organisation_id: organisation_id,
                ...body
            });

            res.json({
                success:1,
                result
            }); 
        } catch (error) {
            res.json({
                success:0,
                error
            }); 
        }
    },

    applyOnScholarship : async (req,res) => {
        const payload = req.decode.payload;
        let body = req.body; 
        const user_id = payload.id;
        const scholarship_id = req.params.id; 
        try {
            const result = await db.scholarship_has_users.create({
                user_id:user_id,
                scholarship_id:scholarship_id,
                ...body 
            });
            console.log(result);
            res.json({
                success:1,
                user_id,
                scholarship_id 
            }); 
            
        } catch(error) {
            res.json({
                success:0,
                error
            }); 
        }
        
    },

    acceptScholarship: async(req, res) => {
        const application_id = req.params.id;
        try {
            const response = await db.scholarship_has_users.findOne({ where: { id: application_id }});
            response.status = "accepted";
            await response.save();
            res.json({
                success:1,
                response  
            });
        } catch (error) {
            res.json({
                success:0,
                error
            }); 
        }
    },

    rejectScholarship: async(req, res) => {
        const application_id = req.params.id;
        try {
            const response = await db.scholarship_has_users.findOne({ where: { id: application_id }});
            response.status = "rejected";
            await response.save();
            res.json({
                success:1,
                response  
            });
        } catch (error) {
            res.json({
                success:0,
                error
            }); 
        }
    },

    payScholarship: async(req, res) => {
        const application_id = req.params.id;
        try {
            const response = await db.scholarship_has_users.findOne({ where: { id: application_id }});
            response.status = "funds transfered";
            await response.save();
            res.json({
                success:1,
                response  
            });
        } catch (error) {
            res.json({
                success:0,
                error
            }); 
        }
    }

}