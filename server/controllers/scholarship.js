const models = require("../models")
const { db } = require("../models")
const { Sequelize } = require('sequelize');


const errorObj = (message = "There was an error")=>{
    return {
        success:0,
        message
    }; 
}

const successObj = (result = "Operation processed") => {
    return {
        success:1,
        result:result
    };
}

const updateApplicationStatus = async(organisation_id,application_id,status) => {
    try {
        const response = await db.student_has_scholarship.findOne({ 
            where: { 
                id: application_id 
            }
        });
        if(!response) { return Promise.reject("No such application exists"); }

        const scholarship_id  = response.scholarship_id; 
        //check if regulator is modifying own organization details 
        const exists = await db.scholarship.findOne({ scholarship_id,organisation_id });
        if(exists)  
        {
            response.status = status;
            await response.save();
            return Promise.resolve(response);
        } else { 
            return Promise.reject("no such application from your organization exists"); 
        }
    } catch (error) {
        console.log(error,"error"); 
        return Promise.reject("There was an error");
    }
}


module.exports = {
    getScholarships:async (req,res) => {  //view all scholarships to apply for 
        
        try { 
            const list = await db.scholarship.findAll({
                include : [
                    {
                        model : db.Organisation ,
                        attributes : ['name']
                    }
                ]
            },
            {raw:true});
            console.log(list); 
            return res.json(successObj(list)); 
        } catch(error) { console.log(error); 
            res.json(errorObj()); 
        }
        
    },

    getScholarship: async (req,res)=>{ //student views a particular scholarship 
        const id = req.params.id;
        try { 
            const result = await db.scholarship.findOne( {where:{id:id}} );  
            //console.log(result); 
            res.json(successObj(result));
        } catch(error) {
            console.log(error); 
            res.json(errorObj()); 
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
                return res.json(successObj("Application updated"));  
            } else {
                const result = await db.student_has_scholarship.create({
                    user_id:user_id,
                    scholarship_id:scholarship_id,
                    ...body 
                });
                res.json(successObj("Application created"));
            }
        } catch(error) {
            console.log(error); 
            res.json(errorObj()); 
        }
        
    },
    studentViewsApplications : async(req,res)=>{
        const user_id = req.decode.payload.id;
        try {
            const result = await db.student_has_scholarship.findAll({ where:{user_id} }); 
            return res.json(successObj(result)); 
        } catch(error) {
            console.log(error); 
            return res.json(errorObj());
        }
    },
    
    // ALL REGULATOR RELATED CONTROLLERS ARE BELOW 

    addScholarship: async (req, res) => { 
        const payload = req.decode.payload;
        let body = req.body;
        const organisation_id = payload.organisation_id;

        try {
            const result = await db.scholarship.create({
                organisation_id: organisation_id,
                ...body
            });

            res.json(successObj(result)); 
        } catch (error) {
            console.log(error); 
            res.json(errorObj()); 
        }
    },
    viewScholarshipByRegulator: async(req,res)=>{
        const organisation_id = req.decode.payload.organisation_id; 
        try { 
            
            const result = await db.scholarship.findAll({ where:{organisation_id} }); 
            return res.json(successObj(result)); 

        } catch(error) {
            console.log(error); 
            return res.json(errorObj())
        }
    }, 
    viewApplicationsOnScholarhip: async(req,res)=>{
        const scholarship_id = req.params.id; 
        const organisation_id = req.decode.payload.organisation_id; 
        try { 
            // regulator shoudn't be able to view other organizations scholarship applications 
            const exists = await db.scholarship.findOne({ where:{id:scholarship_id,organisation_id }}); //another option is eager loading
            if(exists) { 
                console.log(exists,"Asdsdsd"); 
                const result = await db.student_has_scholarship.findAll({ where:{scholarship_id:scholarship_id }});
                return res.json(successObj(result))
            } else { 
                return res.json(errorObj("No such scholarship from your organization exists"));
            }
        } catch(error){ 
            console.log(error); 
            return res.json(errorObj("Fetch unsuccessful")); 
        }
    }, 
    
    acceptScholarship: async(req, res) => {
        const organisation_id = req.decode.payload.organisation_id;
        const application_id = req.params.id;
        try {
            const result = await updateApplicationStatus(organisation_id,application_id,"accepted"); 
            return res.json(successObj(result)); 
        } catch (error) {
            console.log(error); 
            return res.json(errorObj(error)); 
        }
    },
    rejectScholarship: async(req, res) => {
        const organisation_id = req.decode.payload.organisation_id;
        const application_id = req.params.id;
        try {
            const result = await updateApplicationStatus(organisation_id,application_id,"rejected"); 
            return res.json(successObj(result)); 
        } catch (error) {
            console.log(error); 
            return res.json(errorObj(error)); 
        }
    },

    payScholarship: async(req, res) => {
        const organisation_id = req.decode.payload.organisation_id;
        const application_id = req.params.id;
        try {
            const result = await updateApplicationStatus(organisation_id,application_id,"funds transferred"); 
            return res.json(successObj(result)); 
        } catch (error) {
            console.log(error); 
            return res.json(errorObj(error)); 
        }
    }

}
