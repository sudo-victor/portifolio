require('dotenv').config();
import { NextApiRequest, NextApiResponse  } from 'next';
import nodemailer from 'nodemailer';

export default function (req: NextApiRequest, res: NextApiResponse) {

    const EMAIL = process.env.EMAIL;
    
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b0377d51f275f4",
          pass: "1116e6070c0a0d"
        }
      });

    const mailData = {
      from: EMAIL,
      to: EMAIL,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err) {
          console.log(err)
          return res.status(400).end();
        }
      else {
          console.log(info)
          return res.status(200).end()
        }
    })
  }