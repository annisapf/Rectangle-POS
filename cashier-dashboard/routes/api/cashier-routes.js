const express = require("express");
const router = express.Router();
const cors = require('cors');
// const jwt = require("jsonwebtoken");

// Load input validation
const validateLoginInput = require("../../validation/login");

// Load User model
const Cashier = require("../../models/Cashier");
router.use(cors())
process.env.SECRET_KEY = 'secret';

router.post('/api/login', (req, res) => {
    Cashier.findOne({
        username: req.body.username
    })
        .then(response => {
            if (response) {
                if (req.body.password == response.password) {
                    res.send({
                         mid : response.mid,
                         cashier_id : response._id,
                         username : response.username,
                    })
                        
                }
                else {
                    res.status(400).json({ error: "User does not exist" });
                }
            }
            else {
                res.status(400).json({ error: "User does not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

router.get('/api/displaycashier', (req, res) => {
    Cashier.find()
        .then(response => {
            if (response) {
                res.json(response)
            }
            else {
                res.status(400).json({ error: "Users do not exist" });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

module.exports = router;
