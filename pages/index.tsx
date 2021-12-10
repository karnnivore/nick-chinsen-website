import type { NextPage } from 'next'
import Head from 'next/head'
import { LandingLayout } from '../components/layout/LandingLayout'
import { Hero } from '../components/home/Hero'
import { About } from '../components/home/About'
import { Footer } from '../components/layout/Footer'
import { Career } from '../components/home/Career'
import { Contact } from '../components/home/Contact'
import { Work } from '../components/home/Work'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nick Chinsen - Full Stack Developer</title>
        <meta name="description" content="Nick Chinsen full stack developer based in Toronto" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <LandingLayout>
        <Hero/>
        <About/>
        <Career/>
        <Work/>
        <Contact/>
      </LandingLayout>     
      <Footer/> 
    </>
  )
}

export default Home
