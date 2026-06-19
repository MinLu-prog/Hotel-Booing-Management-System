require('dotenv').config();

const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URI;

if (!mongoURL) {
    console.error('MONGO_URI is not set in .env');
}

mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
