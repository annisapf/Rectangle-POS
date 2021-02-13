const router = require("express").Router();
const transactionController = require("../../controllers/transactionController");


router.post('/api/transaction/get-all',
    function (req, res)  {
        console.log (transactionController);
        console.log (req.body);
        
        transactionController.findAll( req , res );
});


module.exports = router;