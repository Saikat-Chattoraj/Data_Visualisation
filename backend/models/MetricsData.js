const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricsDataSchema = new Schema({
        id:{
            type:String,
            required:true
        },
        measure: {
            type:String,
            unique:false,
            maxLength:200,
            // required:true
        },
        data: {
            type:Array,
            required:true
        }
    },
    {
        versionKey:false,
    }
);

module.exports = mongoose.model("MetricsData", metricsDataSchema);