const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");


router.post('/api/transaction/add',
    function (req, res)  {
        console.log (transactionController);
        console.log (req.body);
        
        transactionController.create( req , res );
});

module.exports = router;