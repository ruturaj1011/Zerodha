const { NewOrder } = require("../Controllers/Order");
const router = require("express").Router();

router.post("/", NewOrder);

module.exports = router;