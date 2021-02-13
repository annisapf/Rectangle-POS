const db = require("../models");
module.exports = {
    findAll: function(req,res) {
        db.Transaction.find(
            {mid : req.body.mid},
            function(err, obj)
            {
                var trans_item = JSON.parse(JSON.stringify(obj));
                for (var idx=0; idx < trans_item.length;idx++)
                {
                    var product_list = trans_item[idx].product_list;
                    for (var ddx=0; ddx < product_list.length; ddx++)
                    {
                        if (trans_item[idx].product_list_name == null)
                        {
                            trans_item[idx].product_list_name = product_list[ddx].name
                        }
                        else
                        {
                            trans_item[idx].product_list_name = trans_item[idx].product_list_name + "," + product_list[ddx].name;
                        }
                    }
                    delete trans_item[idx].product_list;
                }
                res.send(trans_item);
            }
        )
 
    },
};