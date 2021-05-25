import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

import styles from './header.module.scss';

export default function Header() {
  const [activatedNav, setActivatedNav] = useState(false);

  function toggleNav() {
    setActivatedNav(!activatedNav);
  }

  return (
    <div className={styles.headerComponent}>
      <h1 className={styles.logo}> &lt; victor souto &gt; </h1>

      <button className={styles.hamburguer} onClick={toggleNav}>
        <BiMenu size={32} color="#34d1bf"/>
      </button>

      <nav className={activatedNav ? styles.activated : ""}>
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
