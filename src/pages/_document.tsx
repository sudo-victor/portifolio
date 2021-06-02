import Document, { Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Signika:wght@700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.png" />
          <meta name="keywords" content="HTML, CSS, JavaScript, Programador Jr, Programador Javascript Jr, Programador Fullstack, Programador Frontend, Programador Backend, TI, Programador"/>
          <link rel="canonical" href="http://www.victorsouto.com.br/" />    

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
