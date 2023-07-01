import 'bootstrap/dist/css/bootstrap.min.css';  // import this first

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import Navbar from '@/components/navbar'
import Navbar from '@/components/navbar'
import NextNProgress from 'nextjs-progressbar'
import { SSRProvider } from 'react-bootstrap';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <SSRProvider>
      <Navbar />
      <Component {...pageProps} />
    </SSRProvider>
  )
}



// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { NextUIProvider } from '@nextui-org/react';
// // import { darkTheme } from '@/themes';
// import { useSSR } from '@nextui-org/react'

// import { createTheme } from "@nextui-org/react"

// // 2. Call createTheme and pass your custom values
// const darkTheme = createTheme({
//   type: 'light',
//   theme: {
//     colors: {...},
//   }
// })

// export default function App({ Component, pageProps }: AppProps) {
//   const { isBrowser } = useSSR()
//   return(
//     isBrowser && (
//       <NextUIProvider >
//         <Component {...pageProps} />
//       </NextUIProvider>
//     )
//   )
// }
