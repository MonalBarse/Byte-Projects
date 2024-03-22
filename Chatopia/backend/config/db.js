const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // process.exit : is given to us by node.js to exit the process
    }
};

module.exports = connectDB; 
 