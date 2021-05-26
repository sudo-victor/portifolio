import Link from 'next/link';
import { RiArrowDownSLine } from 'react-icons/ri';

import styles from './banner.module.scss';

export default function Banner() {
  return (
    <section className={styles.bannerComponent} id="home">
      <p>Aspirante a programador fullstack</p>

      <Link href="#about">
        <button className={styles.goDown}>
          <p>Conheça o Victor</p>
          <RiArrowDownSLine color="#efefef" size={64}/>
        </button>
      </Link>
    </section>
  )
}