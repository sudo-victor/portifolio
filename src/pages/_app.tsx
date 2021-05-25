import type { AppProps } from 'next/app';

import '../../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
    </>
  )
}
export default MyApp
