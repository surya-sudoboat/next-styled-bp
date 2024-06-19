import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HashFame</title>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="images" href="/assets/aboutContentImages/chat.avif" />
        <link rel="images" href="/assets/aboutContentImages/influencers.avif" />
        <meta property="og:image" content="/assets/scannerModal/logo.png" />
        <link
          rel="images"
          href="/assets/aboutContentImages/talentManagers.avif"
        />
        <meta
          name="description"
          content="HashFame is a web application that serves as an open community where you can directly call or chat with over 70k+ verified influencers."
        />
        <meta name="title" content="HashFame" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="images" href="/assets/footer/footer-mockup.avif" />
        <link rel="images" href="/assets/footer/qr-bg.png" />
        <link rel="image" href="/assets/scannerModal/logo.png" />
        <link rel="image" href="/assets/scannerModal/brands.png" />
        <link rel="images" href="/assets/HeroImages/mobile.avif" />
        <link rel="images" href="/assets/imagineCard/imagineImg1.avif" />
        <link rel="images" href="/assets/imagineCard/imagineImg2.avif" />
        <link rel="images" href="/assets/imagineCard/imagineImg3.avif" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
