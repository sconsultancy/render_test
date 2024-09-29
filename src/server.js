require("dotenv").config();
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());

var jsonParser = bodyParser.json();

// Nodemailer

const PORT = process.env.PORT || 5000;

app.post("/api/email", jsonParser, (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "sconsultancygroup21@gmail.com",
      pass: process.env.GPASS,
    },
  });

  const reciever = {
    from: "sconsultancygroup21@gmail.com",
    to: "ashutoshsharma9865@gmail.com",
    subject: "Email home",
    text: `${req.body.email}`,
  };

  auth.sendMail(reciever, (error, emailResponse) => {
    if (error) throw error;
    console.log("success");
    response.end();
  });

  res.send({ message: "Email sent" });
});

app.post("/api/contact", jsonParser, (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "sconsultancygroup21@gmail.com",
      pass: process.env.GPASS,
    },
  });

  const reciever = {
    from: "sconsultancygroup21@gmail.com",
    to: "ashutoshsharma9865@gmail.com",
    subject: "Email home",
    text:
      `FName: ${req.body.fname}` +
      `LName: ${req.body.lName}` +
      `Mobile Number: ${req.body.mobNum}` +
      `Email: ${req.body.mail}`,
  };

  auth.sendMail(reciever, (error, emailResponse) => {
    if (error) throw error;
    console.log("success");
    response.end();
  });

  res.send({ message: "Email sent" });
});

app.get("/", (req, res) => {
  res.send({ message: "We Rock" });
});

app.listen(PORT, () => {
  console.log("listening to port 5000");
});
