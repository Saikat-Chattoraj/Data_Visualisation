// Controller functions to get metrics data from db

const metrics = require("../models/Metrics");

const getMetrics = (req, res) => {
    metrics.find()
    .then((metrics) => res.status(200).json({metrics}))
    .catch((error) => res.status(400).json(error))
  };
  

module.exports = {getMetrics};