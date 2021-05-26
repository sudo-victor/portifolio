import Link from 'next/link';
import React from 'react';
import { AiOutlineWhatsApp as WhatsappIcon } from 'react-icons/ai'

import styles from './whatsapp.module.scss';

export default function Whatsapp() {

  return (
    <Link href="https://api.whatsapp.com/send?phone=5521998200330&text=Ol%C3%A1%2C%20Victor...">
      <a className={styles.whatsappComponent} target="_blank">
        <WhatsappIcon size={48} color="#efefef"/>
      </a>
    </Link>
  )
}
