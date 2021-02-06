const router = require("express").Router();
const productController = require("../../controllers/productController");

router.post('/api/product/add',
    function(req,res) {
        console.log(productController);
        console.log(req.body);

        productController.create(req, res);
    }
);

router.get('/api/product/get-all',
    function(req,res) {
        console.log(productController);
        console.log(req.body);

        productController.findAll(req, res);
    }
);

router.post('/api/product/update',
    function(req,res) {
        console.log(productController);
        console.log(req.body);

        productController.update(req, res);
    }
);

router.post('/api/product/remove',
    function (req, res)  {
        console.log (productController);
        console.log (req.body);
        
        productController.remove( req , res );
});

module.exports = router;