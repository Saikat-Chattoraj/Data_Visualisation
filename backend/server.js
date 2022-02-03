// Invoking the application using express framework
// connecting application to the db using dotenv URI
// Initializing the application on local server with port 5000

const express = require("express");

const connectDB = require("./config/db");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const cors = require('cors')

app.use(cors())

app.use(express.json());

connectDB();

const metricRoutes = require("./routes/metricRoutes");

const metricDataRoutes = require("./routes/metricsDataRoutes");

app.use('/metrics', metricRoutes);

app.use('/metrics_data', metricDataRoutes);

app.listen(5000, () => {
    console.log("server is up and running");
});