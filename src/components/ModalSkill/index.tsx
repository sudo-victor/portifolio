import { SiJavascript, SiTypescript, SiNodeDotJs, SiReact, SiSass, SiExpo, SiNextDotJs, SiHtml5, SiCss3 } from 'react-icons/si';

import { IoCloseOutline } from "react-icons/io5";
import { useModalSkill } from "../../contexts/ModalSkillContext";

import styles from './modal.module.scss';
import IconSkill from '../IconSkill/index.';

export default function ModalSkill() {
  const { content, isActivated, toggleModal } = useModalSkill();

  return (
    <div className={isActivated ? styles.modalComponent : styles.disable}>
      <div className={styles.modal}>
        <header>
          <div>
            <div style={{ background: content.color }}>
              {
                content.name?.length > 3 && (
                  <IconSkill name={content.name} size={24}/>
                )
              }
            </div>
            <span>{content.name}</span>
          </div>

          <button onClick={toggleModal}>
            <IoCloseOutline color="#070707" size={32}/>
          </button>
        </header>
      
        <main>
          <p>
            {content.about}
          </p>
        </main>
      </div>
    </div>
  )
}