const mongoose = require('mongoose');
const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    console.log("mongoDB is connected: ");
};

module.exports = connectDB;