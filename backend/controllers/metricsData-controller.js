// Controller functions to get metrics item data from db

const MetricsData = require("../models/MetricsData");

const getMetricsData = (req, res) => {

  let measure = req.params.measure
  console.log(req.params)

    MetricsData.find({measure: req.params.measure.toString()})
    .then((items) => res.status(200).json(items))
    .catch((error) => res.status(400).json(error))
  };


  

module.exports = {getMetricsData};