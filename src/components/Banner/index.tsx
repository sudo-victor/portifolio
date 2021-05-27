import { useState } from 'react';
import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';
import Typewriter, { TypewriterClass } from "typewriter-effect";

import styles from './banner.module.scss';

export default function Banner() {
  const [text, setText] = useState("")

  function handleTypeWriter(typewriter: TypewriterClass) {
  
       typewriter
       .typeString("backend")
         
       .pauseFor(1000)
       .deleteAll()

       .typeString("frontend")

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
          <p>Conheça o Victor</p>
          <RiArrowDownSLine color="#efefef" size={64}/>
        </button>
      </Link>
    </section>
  )
}