const mongoose = require("mongoose");

const MetricsData = require('./models/MetricsData');

const Metrics = require("./models/Metrics");

const metrics = require("./data/metrics.json");

const metrics_data = require("./data/metrics_data.json"); 

const connectDB = require("./config/db");

const dotenv = require("dotenv");

dotenv.config();

connectDB();

const importData = async() => {
    try {
        await MetricsData.deleteMany();
        await Metrics.deleteMany();
        await MetricsData.insertMany(metrics_data);
        await Metrics.insertMany(metrics);
        console.log("Data imported successfully");
        process.exit();
    }
    catch(err) {
        console.log(`Error : ${err}`);
        process.exit(1);
    }
}

const destroyData = async() => {
    try {
        await MetricsData.deleteMany();
        console.log("Data destroyed successfully");
        process.exit();
    }
    catch(err) {
        console.log(`Error : ${err}`);
        process.exit(1);
    }
}

if(process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}