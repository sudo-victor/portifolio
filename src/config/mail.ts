import nodemailer from 'nodemailer';

type MailDataProps = {
  name: string;
  email: string;
  about: string;
  message: string;
  cellphone: string;
}

export const transporterConfig = nodemailer.createTransport({
  host: String(process.env.MAIL_AUTH_HOST),
  port: Number(process.env.MAIL_AUTH_PORT),
  auth: {
    user: String(process.env.MAIL_AUTH_EMAIL),
    pass: String(process.env.MAIL_AUTH_PASSWORD)
  }
});

export const generateMailData = ({name, email, cellphone, about, message}: MailDataProps) => {
  return {
    from: process.env.MAIL_AUTH_EMAIL,
    to: process.env.MAIL_AUTH_EMAIL,
    subject: `${name}<${email}>`,
    text: `Autor: ${name}, ${email} - ${cellphone}\n\nAssunto: ${about}\n\n ${message}`,
    html: `<h2>Autor:</h2> ${name}, ${email} - ${cellphone}<br/><br/><h2>Assunto:</h2> ${about}<br/><br/> ${message}`,
  }

}