import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider></>
}
