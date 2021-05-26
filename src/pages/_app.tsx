import type { AppProps } from 'next/app';

import '../../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import ModalSkill from '../components/ModalSkill'; 
import { ModalSkillProvider } from '../contexts/ModalSkillContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalSkillProvider>
      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
      <ModalSkill />
    </ModalSkillProvider>
  )
}
export default MyApp
