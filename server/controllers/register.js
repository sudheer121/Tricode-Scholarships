const { db } = require("../models")

const { genSaltSync, hashSync } = require('bcryptjs');
const express = require("express");

module.exports = {

    createUser : (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        console.log(body);
        body.password = hashSync(body.password, salt);
        try {
            db.User.findOrCreate({
            where: { email: body.email },
            defaults: { password: body.password, isProfileCompleted: false }
        })
        .then(function (user, created) {
            if (created) {
                return res.json({
                    'code': 200,
                    'message': 'Resource Created',
                    'user': user
                });
            }
            return res.json({
                'code': 200,
                'message': 'Alredy created User',
                'user': user
            });
        });
        } catch (error) {
            console.log(error);
        }

    }
}