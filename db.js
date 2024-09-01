const mongoose = require("mongoose");

// Use the connection string directly or use environment variables for better security.
const mongoURL = process.env.MONGO_URI || 'mongodb+srv://minlu:allcar@cluster0.ceffd.mongodb.net/HotelBookingSystem';

// Connect to MongoDB without deprecated options
mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
