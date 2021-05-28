import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import Typewriter, { TypewriterClass } from "typewriter-effect";
import { Fade } from "react-reveal";

import styles from './banner.module.scss';

export default function Banner() {

  function handleTypeWriter(typewriter: TypewriterClass) {
  
       typewriter
       .typeString("back-end")
         
       .pauseFor(1000)
       .deleteAll()

       .typeString("front-end")

       .pauseFor(1000)
       .deleteAll()

       .typeString("fullstack")
       .start();
  }

  return (
    <section className={styles.bannerComponent} id="home">
      <p><strong>Aspirante a programador</strong><br/> 
      <Typewriter
       onInit={handleTypeWriter}
       />
      </p>
      <Link href="#about">
        <button className={styles.goDown}>
        <Fade bottom>
            <p>Conheça o Victor</p>
            <RiArrowDownSLine color="#efefef" size={64}/>
        </Fade>
        </button>
      </Link>
    </section>
  )
}