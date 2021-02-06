const db = require("../models");


module.exports = {
    findAll: function(req,res) {
        db.Cashier.find(
            {},
            function(err, obj)
            {
                console.log(obj);
                res.send(obj);
            }
        )
 
    },
    remove: function(req, res){
        var req_body = req.body;
        var cashier_id = req_body.cashier_id;
        db.Cashier.deleteOne(
            {"_id" :  cashier_id},
            function(err, obj)
            {
                res.send({
                    "removed" : obj
                })
            }
        )
    },
    create: function(req,res) {
        var req_body = req.body;
        db.Cashier.findOne(
            {"username" : req.body.username},
            function( err , obj) 
            { 
                if (obj == null)
                {
                    db.Cashier.insertMany(req_body);
                    res.send({
                        "message" : req_body.username + " successfully added"
                    })
                } 
                else
                {
                    res.send({
                        "message" : req_body.username + " already exists"
                    })
                }
            }
        );
    }
};