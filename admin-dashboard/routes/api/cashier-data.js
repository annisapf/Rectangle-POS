const router = require("express").Router();
const cashierController = require("../../controllers/cashierController");



router.post('/api/cashier/add',
    function (req, res)  {
        console.log (cashierController);
        console.log (req.body);
        
        cashierController.create( req , res );
});


router.post('/api/cashier/get-all',
    function (req, res)  {
        console.log (cashierController);
        console.log (req.body);
        
        cashierController.findAll( req , res );
});


router.post('/api/cashier/delete',
    function (req, res)  {
        console.log (cashierController);
        console.log (req.body);
        
        cashierController.remove( req , res );
});

module.exports = router;