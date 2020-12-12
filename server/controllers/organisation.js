const { db } = require("../models")


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

module.exports = {
    viewOrganisations : async(req,res)=>{
        try { 
            const result = await db.Organisation.findAll(); 
            return res.json(successObj(result)); 
        } catch(error) { 
            console.log(error);
            return res.json(errorObj()); 
        }
    },

    addOrganisation : async(req,res)=>{ 
        const body = req.body; 
        try {
            const result = await db.Organisation.create({ 
                ...body
            }); 
            return res.json(successObj(result)); 
        } catch(err) {
            return res.json(errorObj(err)); 
        }
    }
}