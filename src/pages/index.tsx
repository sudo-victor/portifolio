import styles from './index.module.scss';
import {SiJavascript, SiTypescript, SiNodeDotJs, SiReact, SiSass, SiExpo} from 'react-icons/si';

import database from '../data/database.json';
import { useState } from 'react';

export default function Home() {
  const [skills] = useState(database.skills);
  const Icon = {
    "Javascript": () => <SiJavascript color="#efefef" size={64}/>,
    "Typescript": () => <SiTypescript color="#efefef" size={64}/>,
    "Node.js": () => <SiNodeDotJs color="#efefef" size={64}/>,
    "ReactJS": () => <SiReact color="#efefef" size={64}/>,
    "Sass": () => <SiSass color="#efefef" size={64}/>,
    "Expo": () => <SiExpo color="#efefef" size={64}/>,
  } as any

  return (
    <div id={styles.homePage}>
     <section className={styles.banner} id="home">
       <p>Aspirante a programador fullstack</p>
     </section>

     <section className={styles.about} id="about">
      <div>
        <h2>Sobre Mim</h2>

        <p>
          <strong>Olá</strong>, sou um estudante da programação visando ser no futuro um programador fullstack.  
          Atualmente estou  focado nas tecnologias: Node, React e React Native, 
          mas sempre em busca de novos conhecimentos. Também 
          tive contato com as linguagens Python, PHP e Elixir. 
        </p>
      </div>

      <div className={styles.bannerAbout}></div>
     </section>
    
    <section className={styles.skills} id="skills">
      <h2>Minhas Skills</h2>

      <div>

        {
          skills.map(skill => (
            <article key={skill.name}>
              <div style={{background: skill.color}}>
                {Icon[String(skill.name)]()}
              </div>
              <span>{skill.name}</span>
            </article>
          ))
        }

      </div>

    </section>

    <section className={styles.cvContainer} id="cv">
      <button className={styles.cv}>
        baixar cv
      </button>
    </section>

    <section className={styles.projects} id="projects">
      <h2>Projetos</h2>
      <div className={styles.tags}>
        <button className={styles.activated}>HTML5/CSS3</button>
        <button>ReactJS</button>
        <button>Expo</button>
        <button>Node.JS</button>
      </div>

      <div className={styles.items}>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </div>
    </section>

    <section className={styles.contact} id="contact">
      <div>
        <h2>Meu Contato</h2>

        <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>

        <p>
          E-MAIL: MEU@EMAIL.COM.BR<br/><br/>
          WHATSAPP: +55 21 96545-1909<br/><br/>
          ENDEREÇO: JACAREPAGUÁ, RJ
        </p>
      </div>

      <form action="">
        <input type="text" placeholder="Nome..."/>
        <input type="email" placeholder="E-mail..."/>
        <input type="telefone" placeholder="Telefone..."/>
        <input type="text" placeholder="Assunto..."/>
        <textarea placeholder="Sua mensagem..."/>

        <button>enviar sua mensagem</button>
      </form>
    </section>
    </div>
  )
}
