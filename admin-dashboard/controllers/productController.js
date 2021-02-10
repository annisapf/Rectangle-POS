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

    /*
    
    0]   fieldname: 'avatar',
[0]   originalname: 'admin-dashboard.png',
[0]   encoding: '7bit',
[0]   mimetype: 'image/png',
[0]   destination: 'uploads',
[0]   filename: 'admin-dashboard.png',
[0]   path: 'uploads\\admin-dashboard.png',
[0]   size: 38981

    
    */ 

    create: function(req, res) {
        var req_body = req.body;

        // write the file to the /upload folder

        var filename_original = req.file.originalname
        var url = "http://localhost:5001/upload/" + filename_original
        req_body.image = url;
        db.Product.insertMany(req_body);
        console.log("------------------------")
        console.log(req_body)
        res.send({
            "message" : req_body.name + " successfully added"
        })
    }
}