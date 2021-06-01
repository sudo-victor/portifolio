require('dotenv').config();
import { NextApiRequest, NextApiResponse  } from 'next';

import { generateMailData, transporterConfig } from '../../config/mail';

export default async function (req: NextApiRequest, res: NextApiResponse) {

    
    let transporter = transporterConfig;

    const mailData = generateMailData(req.body);

    await transporter.sendMail(mailData)
      .then(info => {
        console.log(info)
        return res.status(200).end()
      })
      .catch(err => {
        console.log(err)
        return res.status(400).end();
      });
    
  }