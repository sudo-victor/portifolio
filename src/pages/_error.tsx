import { NextSeo } from 'next-seo';

import styles from '../../styles/error.module.scss';
import Header from '../components/Header';

export default function Home() {

  return (
    <div id={styles.errorPage}>
    <NextSeo
      title={`Victor Souto | 404`}
      description="Oi eu sou o Goku!"
    />
      <section className={styles.containerSection}>
      <Header />
      <section className={styles.error}>
        <p>ERROR 404 | Página não encontrada</p>
      </section>
      </section>

    </div>
  )
}
