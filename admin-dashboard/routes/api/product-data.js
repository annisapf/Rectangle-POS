const router = require("express").Router();
const productController = require("../../controllers/productController");

/*
router.post('/api/product/add',
    function(req,res) {
        console.log("---------- /api/product/add ----------");
        console.log(req);
        console.log("---------- /api/product/add ----------");
        console.log(productController);
       

        productController.create(req, res);
    }
);
*/

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

router.post('/api/product/delete',
    function (req, res)  {
        console.log (productController);
        console.log (req.body);
        
        productController.remove( req , res );
});

router.post('/upload', 
    function (req, res) {
        console.log("Request req.body", req.body);
        console.log("Request file", req.file)
        productController.create(req, res);
    
})



module.exports = router;