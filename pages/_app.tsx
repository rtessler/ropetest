import 'bootstrap/dist/css/bootstrap.min.css';  // import this first

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/RTnavbar' 
import NextNProgress from 'nextjs-progressbar'
import { SSRProvider } from 'react-bootstrap';
import { Footer } from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  )
}


