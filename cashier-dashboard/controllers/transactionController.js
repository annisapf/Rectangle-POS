const db = require("../models");
module.exports = {
    create: function(req, res) {
        var req_body = req.body;
    
        db.Transaction.insertMany(req_body);
        console.log("------------------------")
        console.log(req_body)
        res.send({
            "message" : " transaction API is successfully added"
        })
    }

    
};