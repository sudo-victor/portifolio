require('dotenv').config();

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function (req: NextApiRequest, res: NextApiResponse) {

  const PASSWORD = process.env.PASSWORD;
  const EMAIL = process.env.EMAIL;

  const mailData = {
    from: `Meu portifólio - ${EMAIL}`,
    to: EMAIL,
    subject: `Mensagem de ${req.body.name}<${req.body.email}>`,
    text: `Assunto: ${req.body.about} \n\n ${req.body.message}`,
    html: `<div>Assunto: ${req.body.about} <br/><br/> ${req.body.message}</div>`
  };

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  });

  return res.status(200)
}