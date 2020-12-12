const models = require("../models")
const { db } = require("../models")

const cantAccess = {
    "success":0,
    "message":"Route inaccessible"
}

module.exports = {
    getScholarships:async (req,res) => {  //view all scholarships to apply for 
        
        try {
            const list = await db.scholarship.findAll();
            console.log(list); 
            res.json({
                success:1,
                message:"Fetch successful",
                list 
            })
        } catch(error) {
            res.json({
                success:0,
                message:"Fetch unsuccessful",
                error 
            })
        }
        
    },

    getScholarship: async (req,res)=>{ //student views a particular scholarship 
        const id = req.params.id;
        try { 
            const result = await db.scholarship.findOne( {where:{id:id}} );  
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
    applyOnScholarship : async (req,res) => { //student applies on particular scholarship 
        const payload = req.decode.payload;
        let body = req.body; 
        
        const user_id = payload.id;
        const scholarship_id = req.params.id; 
        console.log(body,scholarship_id); 
        try {

            const exists = await db.student_has_scholarship.findOne({ where: {user_id, scholarship_id} });
            console.log(exists); 
            if(exists) {
                let result = await exists.update({...body});
                return res.json({
                    success:1,
                    message:"Application updated",
                    result
                })
            } else {
                const result = await db.student_has_scholarship.create({
                    user_id:user_id,
                    scholarship_id:scholarship_id,
                    ...body 
                });
                res.json({
                    success:1,
                    message: "Application under process",
                    user_id,
                    scholarship_id 
                });
            }
        } catch(error) {
            console.log(error); 
            res.json({
                success:0,
                message:"No such scholarship exists"
            }); 
        }
        
    },
    studentViewsApplications : async(req,res)=>{
        const user_id = req.decode.payload.id;
        try {
            const result = await db.student_has_scholarship.findAll({user_id}); 
            return res.json({
                success:1,
                message:"Fetch successful",
                result
            }); 
        } catch(error) {
            console.log(error); 
            return res.json({
                success:0,
                message:"There was an error"
            })
        }
    },
    
    // REGULATOR RELATED CONTROLLERS BELOW 
    addScholarship: async (req, res) => { 
        const payload = req.decode.payload;
        let body = req.body;
        const organisation_id = payload.organisation_id;

        try {
            const result = await db.scholarship.create({
                organisation_id: organisation_id,
                ...body
            });

            res.json({
                success:1,
                result
            }); 
        } catch (error) {
            console.log(error); 
            res.json({
                success:0,
                error
            }); 
        }
    },
    viewScholarshipByRegulator: async(req,res)=>{
        const organisation_id = req.decode.payload.organisation_id; 
        try { 
            
            const result = await db.scholarship.findAll({ where:{organisation_id} }); 
            return res.json({
                success:1,
                message:"Fetch successful",
                result 
            }); 

        } catch(error) {
            console.log(error); 
            return res.json({
                success:0,
                message:"Fetch unsuccessful"
            })
        }
    }, 
    viewApplicationsOnScholarhip: async(req,res)=>{
        const scholarship_id = req.params.id; 
        const organisation_id = req.decode.payload.organisation_id; 
        try { 
            // regulator shoudn't be able to view other organizations scholarship applications 
            const exists = await db.scholarship.findOne({ where:{id:scholarship_id,organisation_id }});
            if(exists) { 
                console.log(exists,"Asdsdsd"); 
                const result = await db.student_has_scholarship.findAll({ where:{scholarship_id:scholarship_id }});
                return res.json({
                    success:1,
                    message:"Fetch successful",
                    result 
                })
            } else { 
                return res.json({
                    success:0,
                    message:"No such scholarship from your organization exists" 
                })
            }
        } catch(error){ 
            console.log(error); 
            return res.json({
                success:0,
                message:"Fetch unsuccessful",
            })
        }
    }, 
    acceptScholarship: async(req, res) => {
        const payload = req.decode.payload;
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
            console.log(error); 
            res.json({
                success:0,
                message:"No such scholarship exists"
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