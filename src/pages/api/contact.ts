import { NextApiRequest, NextApiResponse  } from 'next';

import { sendEmail } from '../../helpers/sendEmail';
import  sgMail from '@sendgrid/mail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  sgMail.setApiKey('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')

  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
