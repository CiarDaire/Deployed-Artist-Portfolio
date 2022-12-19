import React from 'react';
import '../styles/globals.css';
import NextNProgress from "nextjs-progressbar";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
          <title>Lu Steven</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="Lu Steven, artist, art, portfolio" />
          <link rel="icon" href="./images/icon.png" />
      </Head>
      <NextNProgress />,
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
