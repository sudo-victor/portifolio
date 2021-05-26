
import Banner from '../components/Banner';
import styles from './index.module.scss';
import About from '../components/About';
import Skills from '../components/Skills';
import CvButton from '../components/CvButton';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {

  return (
    <div id={styles.homePage}>
      <Banner />
      <About />
      <Skills />
      <CvButton />
      <Projects />
      <Contact />

    </div>
  )
}
