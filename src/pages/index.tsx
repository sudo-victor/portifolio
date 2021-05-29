import { NextSeo } from 'next-seo';

import Banner from '../components/Banner';
import styles from './index.module.scss';
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
      title={`Victor Souto | Aspirante a Programador`}
      description="Oi eu sou o Goku!"
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
