const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Product.find(
            {},
            function(err, obj)
            {
                console.log(obj);
                res.send(obj);
            }
        )
    },

    remove: function(req,res){
        var req_body = req.body;
        var product_id = req_body.product_id;
        db.Product.deleteOne(
            {"_id" : product_id},
            function(err, obj)
            {
                res.send({
                    "removed" : obj
                })
            }
        )
    },

    update: function(req,res){
        var req_body = req.body;
        var product_id = req_body.product_id;
        db.Product.update(
            {"_id" : product_id},{$set:req_body},
            function(err, obj)
            {
                res.send({
                    "updated" : obj
                })
            }
        )
    },


    create: function(req, res) {
        var req_body = req.body;
        db.Product.insertMany(req_body);
        res.send({
            "message" : req_body.name + " successfully added"
        })
    }
}