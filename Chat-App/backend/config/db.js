const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://monalbarsemongo:Noobm%40ster69.@cluster1.tgeutud.mongodb.net/`);
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline.bold);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
