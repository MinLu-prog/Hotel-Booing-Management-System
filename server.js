require('dotenv').config();

const express = require("express");
const path = require("path");

const app = express();

const dbConfig = require('./db');
const mongoose = dbConfig;
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const emailRoute = require('./routes/emailRoute');
const bookingsRoute = require('./routes/bookingsRoute');

app.use((req, res, next) => {
    const allowedOrigin = process.env.CLIENT_URL || '*';
    res.header('Access-Control-Allow-Origin', allowedOrigin);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/bookings', bookingsRoute);
app.use('/api/bookings', emailRoute);

if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, 'client/build');
    app.use(express.static(clientBuildPath));
    app.get('*', (req, res) => {
        res.sendFile(path.join(clientBuildPath, 'index.html'));
    });
}

const port = process.env.PORT || 5000;

mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});
