const express = require("express");

const dataController = require("../controllers/datacontroller");

const router = express.Router();

router.get("/getData", dataController.getData);

router.get("/searchData", dataController.searchData);

module.exports = router;
