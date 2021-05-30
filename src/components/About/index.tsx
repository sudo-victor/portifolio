import { Fade } from 'react-reveal';

import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.aboutComponent} id="about">
     <div>
       <Fade left>
        <h2>Sobre Mim</h2>

        <p>
          <strong>Olá</strong>, meu nome é Victor de Souto Soares, 
          tenho 18 anos e estudo programação acerca de 2 anos. Sempre fui apaixonado 
          por tecnologia e quando conheci a área de desenvolvimento fullstack foi amor a primeira vista.
          Já tive contato com algumas linguagens de programação, como: <i>Python, PHP e ultimamente o JAVA</i> por conta da faculdade, mas
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