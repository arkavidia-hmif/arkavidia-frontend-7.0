import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          font-family: 'roboto';
        }
      `}
      </style>
    </>
  )
}