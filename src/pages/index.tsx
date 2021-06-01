import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import styles from '../../styles/index.module.scss';
import About from '../components/About';
import Skills from '../components/Skills';
import CvButton from '../components/CvButton';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Header from '../components/Header';

export default function Home() {

  return (
    <div id={styles.homePage}>
    <NextSeo
      title={`Victor Souto | Programador Junior`}
      description="Olá meu nome é Victor de Souto Soares, 
      tenho 18 anos e estudo programação acerca de 2 anos. Sempre fui apaixonado 
      por tecnologia e quando conheci a área de desenvolvimento fullstack foi amor a primeira vista.
      Já tive contato com algumas linguagens de programação, como: Python, PHP e ultimamente o JAVA por conta da faculdade, mas
       atualmente estou focando meus estudos na linguagem Javascript e seu ecossistema."
    />
      <section className={styles.containerSection}>
      <Header />
      <Banner />
      <About />
      </section>
      <section className={styles.containerSection}>
      <Header isWhite />
      <Skills />
      <CvButton />
      <Projects />
      <Contact />
      </section>

    </div>
  )
}
