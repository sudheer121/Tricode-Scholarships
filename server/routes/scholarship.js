const {
    getScholarships, 
    getScholarship,
    applyOnScholarship, 
    addScholarship
} = require("../controllers/scholarship"); 
const { checkToken} = require("../middleware/tokenvalidation");
const { checkAdmin } = require("../middleware/adminvalidation");

const express = require("express");

const router = express.Router();
router.use(express.json());

router.get("/scholarship",getScholarships); 
router.get("/scholarship/:id",getScholarship); // info about particular scholarship 
router.post("/scholarship/:id/apply",checkToken, applyOnScholarship); //student applies for a scholarship having id :id 

//router.use("/regulator/scholarship/new",checkToken);
//router.use("/regulator/scholarship/new",checkAdmin); 
router.post("/regulator/scholarship/new",checkToken,addScholarship);
module.exports = router 