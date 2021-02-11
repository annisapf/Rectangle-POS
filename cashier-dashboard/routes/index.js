const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/cashier-routes");
const shoppingRoutes = require("./api/shopping-routes")

// API Routes
router.use(apiRoutes);
router.use(shoppingRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
