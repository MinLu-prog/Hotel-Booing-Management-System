const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const moment = require('moment');
const stripe = require('stripe')('sk_test_51Ps6A1H6f7IOyMyV30gPHEypgm0iDd7YqKlmADllcGIPa960Tchttxt1jJ04fMVsBf3DPQQcOvbSvIjTd1jQmZZz008O53sS5h');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
require('dotenv').config();  // Ensure you load environment variables

// Create the transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER, // Your email address from environment variables
        pass: process.env.APP_PASSWORD, // Your app-specific password from environment variables
    },
});

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
        // Stripe payment process
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const payment = await stripe.charges.create(
            {
                amount: totalamount * 100,
                customer: customer.id,
                currency: 'MMK',
                receipt_email: token.email
            },
            {
                idempotencyKey: uuidv4()
            }
        );

        if (payment) {
            // Proceed with booking if payment is successful
            const newbooking = new Booking({
                room: room.name,
                roomid: room._id,
                userid: userid,
                fromdate: fromdate,
                todate: todate,
                totalamount,
                totaldays,
                transactionId: '1234',
            });

            const booking = await newbooking.save();

            const roomtemp = await Room.findOne({ _id: room._id });

            roomtemp.currentbookings.push({
                bookingid: booking._id,
                fromdate,
                todate,
                userid: userid,
                status: booking.status
            });

            await roomtemp.save();
            res.send('Booked Successfully!');
        } else {
            return res.status(400).json({ message: "Payment was not successful." });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/getbookingsbyuserid', async (req, res) => {
    const userid = req.body.userid;
    try {
        const booking = await Booking.find({ userid: userid });
        res.send(booking);
    } catch (error) {
        return res.status(400).json({ error });
    }
});
router.post("/cancelbooking", async (req, res) => {
    const { bookingid, roomid, email } = req.body;  // Directly destructure email

    try {
        const bookingitem = await Booking.findOne({ _id: bookingid });
        bookingitem.status = 'cancelled';
        await bookingitem.save();

        const room = await Room.findOne({ _id: roomid });

        const bookings = room.currentbookings;
        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid);
        room.currentbookings = temp;
        await room.save();

        // Send cancellation email
        const mailOptions = {
            from: {
                name: 'Malika',
                address: process.env.USER,
            },
            to: email,  // Use email directly
            subject: "Booking Cancellation Confirmation",
            text: `Your booking for room ${bookingitem.room} from ${bookingitem.fromdate} to ${bookingitem.todate} has been successfully cancelled.\nBooking cancel သွားပါပြီရှင်။\nNO RETURN POLICY ဖြစ်သည့်အတွက်လူကြီးမင်း၏ငွေအားပြန်အမ်း၍မရနိုင်ပါ။\nသာယာကောင်းမွန်သောနေ့သစ်လေးပိုင်ဆိုင်နိုင်ပါစေရှင်။\n`
        };

        await transporter.sendMail(mailOptions);


res.send('Your booking was cancelled successfully and a confirmation email has been sent.');
    } catch (error) {
        console.log("Error occurred while cancelling booking:", error);
        return res.status(400).json({ error });
    }
});


router.get('/getallbookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.send(bookings);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;