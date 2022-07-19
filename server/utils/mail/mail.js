const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = ({ subject, newContent }) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL, // Your gmail.
      pass: process.env.GMAIL_PASS, // You have to create your application password in gmail, you can't using your credential password directly.
    },
  });

  var mailOptions = {
    from: `"Work Offer" <noreply@noreply.com>`,
    to: "classieroof@gmail.com",
    subject: subject,
    text: "",
    html: newContent,
  };

  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error start");
        console.log(error);
        console.log("error end");
        resolve({
          error: true,
          message: error,
          email: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASS,
        });
      } else {
        resolve({
          error: false,
          message: "Message sent: " + info.response,
        });
      }
    });
  });
};

module.exports = { sendMail };
