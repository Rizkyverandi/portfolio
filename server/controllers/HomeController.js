const { sendMail } = require("../utils/mail/mail.js");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

exports.contactMe = async (req, res) => {
  let subject = `Work Invitation, come look this offer!`;
  const content = fs.readFileSync(
    path.join(__dirname, "../utils") + "/mail/emailTemplate.html",
    { encoding: "utf-8" }
  );

  let template = handlebars.compile(content);
  let data = {
    nama: req.body.nama,
    from: req.body.from,
    desc: req.body.desc,
  };
  let newContent = template(data);

  try {
    const sendMailResult = await sendMail({ subject, newContent });
    return res.status(201).json({ sendMailResult });
  } catch (err) {
    res.status(500).send("Server error cannot send e-mail.");
  }
};
