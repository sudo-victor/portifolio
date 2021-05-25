import Link from 'next/link';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.headerComponent}>
      <h1 className={styles.logo}> &lt; victor souto &gt; </h1>

      <nav>
        <ul>
          <Link href="#home">
            <a>
          <li>home <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#about">
            <a>
          <li>sobre <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#projects">
            <a>
          <li>projetos <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#contact">
            <a>
          <li>contato <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
