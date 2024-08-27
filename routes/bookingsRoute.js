const express = require('express');
const router = express.Router();
const Booking = require("../models/booking")
const Room = require("../models/room")
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51Ps6A1H6f7IOyMyV30gPHEypgm0iDd7YqKlmADllcGIPa960Tchttxt1jJ04fMVsBf3DPQQcOvbSvIjTd1jQmZZz008O53sS5h');
router.post("/bookroom", async (req, res) => {
    const {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token
    } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create(
            {
                amount: totalamount * 100,
                customer: customer.id,
                currency: 'MMK',
                receipt_email: token.email
            }, {
            idempotencyKey: uuidv4()
        }
        )
        if (payment) {
        
                const newbooking = new Booking({
                    room: room.name,
                    roomid: room.id,
                    userid,
                    fromdate,
                    todate,
                    // fromdate: moment(fromdate).format('DD-MM-YYYY'),
                    // todate: moment(todate).format('DD-MM-YYYY'),
                    totalamount,
                    totaldays,
                    transactionId: '1234',
                })
                const booking = await newbooking.save()

                const roomtemp = await Room.findOne({ _id: room._id })

                roomtemp.currentbookings.push({
                    bookingid: booking._id, fromdate,
                    todate,
                    userid: userid,
                    status: booking.status
                })
                await roomtemp.save()
            } 
        res.send('Payment Successful,Your Room is booked')

    }
    catch (error) {
        return res.status(400).json({ error });
    }
});

    router.post('/getbookingsbyuserid', async(req, res) => {
        const userid = req.body.userid
        console.log(userid);
        try {
            const bookings = await Booking.find({ _id: userid}); //id pyaung htr
            console.log('Booked Successfully');
            res.send(bookings)
        } catch (error) {
            return res.status(400).json({ error })
        }
    });


module.exports = router