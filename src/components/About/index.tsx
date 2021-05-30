import { Fade } from 'react-reveal';

import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.aboutComponent} id="about">
     <div>
       <Fade left>
        <h2>Sobre Mim</h2>

        <p>
          <strong>Olá</strong>, meu nome é Victor de Souto (acho que perceberam), 
          tenho 18 anos e estudo programação acerca de 2 anos. Sempre fui apaixonado 
          por tecnologia, quando conheci a área de desenvolvimento fullstack foi amor a primeira vista.
          Já tive contato com algumas linguagens, como: <i>Python, PHP e o JAVA</i> por conta da faculdade, mas
           atualmente estou focando meus estudos na linguagem <i>Javascript</i> e seu ecossistema.
        </p>
       </Fade>
     </div>

     <div className={styles.bannerAbout}>
       <Fade right>
        <div>
          <img src="/img/eu.jpeg" alt="Foto do Victor Souto" />
        </div>
       </Fade>
     </div>
    </section>
  )
}