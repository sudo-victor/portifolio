require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { name, email, about, message } = req.body;

  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOption = {
    from: EMAIL,
    to: EMAIL,
    subject: `${name}<${email}>`,
    text: `
    Assunto: ${about}
    ${message}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
     res.send("error" + JSON.stringify(err));
     res.status(400).end();
    } else {
      console.log("mail send");
      res.send("success");
      res.status(200).end();
    }
});
};