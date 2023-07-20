import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className=' relative w-screen h-screen'>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}