const nodemailer = require("nodemailer");

const sendEmails = (recipientEmail, subject, message, senderName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${senderName}" <${process.env.EMAIL_USER}>`, // Sender name dynamically
    to: recipientEmail,
    subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmails;
