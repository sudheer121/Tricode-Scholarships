const {
    viewOrganisations,
    addOrganisation
} = require("../controllers/organisation"); 

const router = require('express').Router(); 

router.get("/organisations",viewOrganisations);
router.post("/organisations",addOrganisation); //route protection left, only admin posts organisation 
module.exports = router; 