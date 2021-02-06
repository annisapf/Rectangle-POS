const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/user-routes");
const apiCashierRoutes = require("./api/cashier-data");
const apiProductRoutes = require("./api/product-data");

// API Routes
router.use(apiRoutes);
router.use(apiCashierRoutes);
router.use(apiProductRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
