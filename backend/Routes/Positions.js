const { AllPositions } = require("../Controllers/Positions.js");
const router = require("express").Router();

router.get("/", AllPositions);

module.exports = router;