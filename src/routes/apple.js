const express = require('express');
const router = express();
const appleController = require("../controllers/apple-controller");


router.get("/", appleController.appleHome);
router.post("/push", appleController.pushEvents);

module.exports = router;