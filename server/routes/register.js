const db = require("../models")

const { genSaltSync, hashSync } = require('bcryptjs');
const express = require("express");
const User = require("../models/User");

const router = express.Router();
router.use(express.json());

router.post("/register", async (req, res) => {
    
    const body = req.body;
    const salt = genSaltSync(10);
    console.log(body);
    body.password = hashSync(body.password, salt);
    try {
        let newUser = await db.user.findAll({ where: { email: body.email } });
        console.log(newUser.toJSON());
        return newUser.toJSON();
    } catch (error) {
        console.log(error);
    }

});

module.exports = router 