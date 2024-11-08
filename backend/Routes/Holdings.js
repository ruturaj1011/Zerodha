const { AllHoldings } = require("../Controllers/Holdings");
const router = require("express").Router();

router.get("/", AllHoldings);

module.exports = router;