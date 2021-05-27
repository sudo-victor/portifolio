import { Fade } from 'react-reveal';

import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.aboutComponent} id="about">
     <div>
       <Fade left>
        <h2>Sobre Mim</h2>

        <p>
          <strong>Olá</strong>, Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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