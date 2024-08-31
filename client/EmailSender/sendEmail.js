const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service : "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
    
  });

  const mailOptions ={
    from: {
        name: 'Min Lu',
        address : process.env.USER
    },
    to: ["lemonnade660@gmail.com"],
    subject: "Send email using nodemailer and gmail", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // 
    
  }

  const sendMail = async(transporter,mailOptions)=>{
    try{
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent successfully");

    }
    catch (error){
        console.log(error);
    }
  }
  sendMail(transporter,mailOptions)