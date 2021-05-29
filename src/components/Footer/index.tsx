import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerComponent}>
    <ul>
      <li>
        <Link href="https://github.com/sudo-victor">
          <a target="_blank">
            <AiFillGithub size={32} color="#efefef"/>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/victor-souto-soares-4811b118a/">
          <a target="_blank">
            <AiFillLinkedin size={32} color="#efefef"/>
          </a>
        </Link>
      </li>
    </ul>

    <p>Copyright &copy; Victor Souto.</p>
    <Link href="#top">
      <h1 className={styles.logo}> &lt;/ victor souto &gt; </h1>
    </Link>
    </div>
  )
}
