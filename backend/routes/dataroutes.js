const express = require("express");

const dataController = require("../controllers/datacontroller");

const router = express.Router();
//route for getting data
router.get("/getData", dataController.getData);
//route for searching a data
router.get("/searchData", dataController.searchData);

module.exports = router;
