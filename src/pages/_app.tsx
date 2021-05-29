import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '../../styles/global.scss';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import ModalSkill from '../components/ModalSkill'; 
import { ModalSkillProvider } from '../contexts/ModalSkillContext';
import { HeaderProvider } from '../contexts/HeaderContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalSkillProvider>
      <HeaderProvider>
        <Component {...pageProps} />
        <Whatsapp />
        <Footer />
        <ModalSkill />
      </HeaderProvider>
      <ToastContainer />
    </ModalSkillProvider>
  )
}
export default MyApp
