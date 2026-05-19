import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  about?: string;
  message: string;
  cellphone?: string;
};

export function makeTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAIL_AUTH_HOST,
    port: Number(process.env.MAIL_AUTH_PORT ?? 587),
    secure: Number(process.env.MAIL_AUTH_PORT ?? 587) === 465,
    auth: {
      user: process.env.MAIL_AUTH_EMAIL,
      pass: process.env.MAIL_AUTH_PASSWORD,
    },
  });
}

export function buildMail({
  name,
  email,
  cellphone,
  about,
  message,
}: ContactPayload) {
  const from = process.env.MAIL_AUTH_EMAIL;
  return {
    from,
    to: from,
    replyTo: email,
    subject: `[Portfolio] ${name} <${email}>`,
    text: `Autor: ${name} <${email}>${cellphone ? ` · ${cellphone}` : ""}\n\nAssunto: ${about ?? "Sem assunto"}\n\n${message}`,
    html: `
      <h2 style="margin:0 0 8px;font-family:system-ui">Novo contato</h2>
      <p style="margin:0;font-family:system-ui;color:#555">
        <strong>${name}</strong> &lt;${email}&gt;${cellphone ? ` · ${cellphone}` : ""}
      </p>
      <p style="margin:16px 0 4px;font-family:system-ui;color:#888"><small>Assunto</small></p>
      <p style="margin:0;font-family:system-ui">${about ?? "Sem assunto"}</p>
      <p style="margin:16px 0 4px;font-family:system-ui;color:#888"><small>Mensagem</small></p>
      <p style="margin:0;font-family:system-ui;white-space:pre-wrap">${message}</p>
    `,
  };
}
