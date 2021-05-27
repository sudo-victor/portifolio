import { Fade } from 'react-reveal';

import styles from './contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contactComponent} id="contact">
      <div>
          <h2>Meu Contato</h2>

        <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>

        <p>
          E-MAIL: MEU@EMAIL.COM.BR<br/><br/>
          WHATSAPP: +55 21 96545-1909<br/><br/>
          ENDEREÇO: JACAREPAGUÁ, RJ
        </p>
      </div>

      <Fade right>
        <form action="" data-scroll-reveal="enter top move 50px, after 0.1s">
          <input type="text" placeholder="Nome..."/>
          <input type="email" placeholder="E-mail..."/>
          <input type="telefone" placeholder="Telefone..."/>
          <input type="text" placeholder="Assunto..."/>
          <textarea placeholder="Sua mensagem..."/>

          <button>enviar sua mensagem</button>
        </form>
      </Fade>
    </section>
  )
}