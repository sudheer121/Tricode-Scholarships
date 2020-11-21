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
    }
}