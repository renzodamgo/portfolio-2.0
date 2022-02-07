import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head >
        <meta name="theme-color" content="#d2d3d1"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}