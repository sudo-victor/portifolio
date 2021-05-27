import { useState } from 'react';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';

import styles from './header.module.scss';

export default function Header() {
  const [activatedNav, setActivatedNav] = useState(false);
  const [current, setCurrent] = useState("home");

  function toggleNav() {
    setActivatedNav(!activatedNav);
  }

  function handleClickLink(text: string) {
    setCurrent(text);
  }

  return (
    <div className={styles.headerComponent}>
      <Link href="#home">
        <h1 className={styles.logo}> &lt; victor souto &gt; </h1>
      </Link>

      <button className={styles.hamburguer} onClick={toggleNav}>
        <BiMenu size={32} color="#34d1bf"/>
      </button>

      <nav className={activatedNav ? styles.activated : ""}>
        <ul>
          <Link href="#home">
            <a className={current === "home" ? styles.currentActivate : ""} onClick={() => handleClickLink("home")}>
          <li>home <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#about">
            <a className={current === "about" ? styles.currentActivate : ""} onClick={() => handleClickLink("about")}>
          <li>sobre <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#skills">
            <a className={current === "skills" ? styles.currentActivate : ""} onClick={() => handleClickLink("skills")}>
          <li>skills <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#projects">
            <a className={current === "projects" ? styles.currentActivate : ""} onClick={() => handleClickLink("projects")}>
          <li>projetos <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
          <Link href="#contact">
            <a className={current === "contact" ? styles.currentActivate : ""} onClick={() => handleClickLink("contact")}>
          <li>contato <span className={styles.borderBottom}></span></li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
