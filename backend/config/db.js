// Connecting the application to MongoDB

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.ATLAS_URI, 
        { 
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Mongodb connected : ${connect.connection.host}`);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;