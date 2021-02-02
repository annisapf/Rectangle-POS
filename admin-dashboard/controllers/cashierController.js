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
        db.Cashier.remove(
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

/*
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


*/