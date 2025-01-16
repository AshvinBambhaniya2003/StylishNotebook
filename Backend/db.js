const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/Notebook";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongoose success");
    })
}

module.exports = connectToMongo;