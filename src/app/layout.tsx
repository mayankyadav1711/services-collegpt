"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import toast, { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{ zIndex: '9999999999' }} // Ensure the container has a high z-index
  toastOptions={{
    className: '',
    duration: 5000,
    style: {
      background: 'white',
      color: 'black',
      fontSize: '16px',
    },
    success: {
      duration: 3000,
     
    },
  }}
/>
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
    </>
  );
}

import { Providers } from "./providers";
