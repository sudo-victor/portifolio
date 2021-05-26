import { IoCloseOutline } from "react-icons/io5";

import styles from './modal.module.scss';

export default function ModalSkill() {
  return (
    <div className={styles.modalComponent}>
      <div className={styles.modal}>
        <header>
          <div><span>Javascript</span></div>

          <button>
            <IoCloseOutline color="#070707" size={32}/>
          </button>
        </header>
      
        <main>
          <p>
            JavaScript é uma linguagem de programação interpretada estruturada, 
            de script em alto nível com tipagem dinâmica fraca e multiparadigma. 
            Juntamente com HTML e CSS, o JavaScript é uma das três principais 
            tecnologias da internet. JavaScript permite páginas da Web 
            interativas e, portanto, é uma parte essencial dos aplicativos da web. 
            A grande maioria dos sites usa, e todos os principais navegadores 
            têm um mecanismo JavaScript dedicado para executá-lo.
          </p>
        </main>
      </div>
    </div>
  )
}