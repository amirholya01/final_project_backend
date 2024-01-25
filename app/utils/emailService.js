
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendActivationEmail(to, activationToken) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Account Activation',
    html: `Click <a href="http://localhost:3000/activate/${activationToken}">here</a> to activate your account.`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendActivationEmail };
