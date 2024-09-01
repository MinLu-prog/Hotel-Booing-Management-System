const express = require("express");

const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const emailRoute = require('./routes/emailRoute')
const bookingsRoute = require('./routes/bookingsRoute')
app.use(express.json())
app.use('/api/users' , usersRoute)
app.use('/api/rooms', roomsRoute) //roomsjson yeh api
app.use('/api/bookings', bookingsRoute)
app.use('/api/bookings',emailRoute)


const port  = process.env.PORT || 5000; //backend server

app.listen(port, () => console.log('Node Server Started Using Nodemon'));