import { useState } from 'react';
import { Fade } from 'react-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './contact.module.scss';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [about, setAbout] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if( name === "") {
      notifyError();
      return;
    } else if( email === "") {
      notifyError();
      return;
    }else if( cellphone === "") {
      notifyError();
      return;
    }else if( about === "") {
      notifyError();
      return;
    } else if( message === "") {
      notifyError();
      return;
    }

    const data = {
      name,
      email,
      cellphone,
      about,
      message
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => {
      console.log("funcionou");
    });

    setName('');
    setEmail('');
    setCellphone('');
    setAbout('');
    setMessage('');
    notifySuccess();
  }

  const notifySuccess = () => toast.success('E-mail enviado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = () => toast.warn('Preencha todos os campos corretamente', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <section className={styles.contactComponent} id="contact">
      <div>
          <h2>Meu Contato</h2>

        <p>Resta alguma dúvida? Preencha os campos com os seguintes dados que em breve entraremos em contato.</p>

        <p>
          E-MAIL: victorsoutosoares@gmail.com<br/><br/>
          WHATSAPP: +55 21 99820-0330<br/><br/>
          ENDEREÇO: Jacarepaguá, RJ
        </p>
      </div>

      <Fade right>
        <form onSubmit={handleSubmit} data-scroll-reveal="enter top move 50px, after 0.1s">
          <input type="text" placeholder="Nome..." value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" placeholder="E-mail..." value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="tel" placeholder="Telefone..." value={cellphone} onChange={(e) => setCellphone(e.target.value)}/>
          <input type="text" placeholder="Assunto..." value={about} onChange={(e) => setAbout(e.target.value)}/>
          <textarea placeholder="Sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)}/>

          <button type="submit" >enviar sua mensagem</button>
        </form>
      </Fade>
    </section>
  )
}