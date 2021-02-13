const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/cashier-routes");
const shoppingRoutes = require("./api/shopping-routes");
const transactionRoutes = require("./api/transaction-routes");

// API Routes
router.use(apiRoutes);
router.use(shoppingRoutes);
router.use(transactionRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
