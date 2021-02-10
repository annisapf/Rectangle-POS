const db = require("../models");
module.exports = {
    findAll: function(req,res) {
        console.log("---------------------------")
        //console.log(req);
        console.log("---------------------------")
        db.Cashier.find(
            {mid : req.body.mid},
            function(err, obj)
            {
                console.log(obj);
                res.send(obj);
            }
        )
 
    },
};