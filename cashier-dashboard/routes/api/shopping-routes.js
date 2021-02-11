const router = require("express").Router();
const shoppingController = require("../../controllers/shoppingController");

router.post('/api/shopping/get-all',
    function(req,res) {
        console.log(shoppingController);
        console.log(req.body);

        shoppingController.findAll(req, res);
    }
);



module.exports = router;