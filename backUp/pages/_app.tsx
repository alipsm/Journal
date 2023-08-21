import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from "react-query";
import React from 'react'
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { Slide, ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {

  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <main className=" relative w-screen h-screen">
        <Navbar />
        <Component {...pageProps} />
      </main>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        limit={5}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </QueryClientProvider>
  );
}