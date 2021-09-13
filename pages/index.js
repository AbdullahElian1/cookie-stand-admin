import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      <Header title={'Cookie Stand Admin'}>
        {/* <h1> Cookie Stand Admin </h1> */}
      </Header>
      <Main>

      </Main>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}