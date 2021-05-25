import { AiOutlineWhatsApp as WhatsappIcon } from 'react-icons/ai'

import styles from './whatsapp.module.scss';

export default function Whatsapp() {
  return (
    <button className={styles.whatsappComponent}>
      <WhatsappIcon size={36} color="#efefef"/>
    </button>
  )
}
