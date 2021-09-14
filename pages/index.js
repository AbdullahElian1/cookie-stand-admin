import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title={'Cookie Stand Admin'}>
        <Link href="Overviews" >
          <a>Overview</a>
        </Link>
      </Header>
      <Main>

      </Main>
     
      
    </div>
  )
}