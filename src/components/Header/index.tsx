import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';

import styles from './header.module.scss';
import { useHeader } from '../../contexts/HeaderContext';

type HeaderProps = {
  isWhite?: boolean;
}

export default function Header({ isWhite }: HeaderProps) {
  const {activatedNav, toggleNav, handleClickLink} = useHeader();

  return (
    <div className={styles.headerComponent}>

      <header className={isWhite ? styles.whiteStyle : ""}>
        <Link href="/#home">
          <h1 className={styles.logo}> &lt; victor souto &gt; </h1>
        </Link>

        <button className={styles.hamburguer} onClick={toggleNav}>
          <BiMenu size={32} color="#34d1bf"/>
        </button>

        <nav className={activatedNav ? styles.activated : ""}>
          <ul>
            <Link href="/#home">
              <a onClick={() => handleClickLink("home")}>
            <li>home <span className={styles.borderBottom}></span></li>
              </a>
            </Link>
            <Link href="/#about">
              <a  onClick={() => handleClickLink("about")}>
            <li>sobre <span className={styles.borderBottom}></span></li>
              </a>
            </Link>
            <Link href="/#skills">
              <a onClick={() => handleClickLink("skills")}>
            <li>skills <span className={styles.borderBottom}></span></li>
              </a>
            </Link>
            <Link href="/#projects">
              <a onClick={() => handleClickLink("projects")}>
            <li>projetos <span className={styles.borderBottom}></span></li>
              </a>
            </Link>
            <Link href="/#contact">
              <a onClick={() => handleClickLink("contact")}>
            <li>contato <span className={styles.borderBottom}></span></li>
              </a>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}
