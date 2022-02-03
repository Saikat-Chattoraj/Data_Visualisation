// Routes for getting metrics data

const express  = require("express");

const router = express.Router();

const {getMetricsData} = require("../controllers/metricsData-controller");

router.get("/:measure", getMetricsData);

module.exports = router;