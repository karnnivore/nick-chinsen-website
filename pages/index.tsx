import type { NextPage } from 'next'
import Head from 'next/head'
import { LandingLayout } from '../components/layout/LandingLayout'
import { Hero } from '../components/home/Hero'
import { About } from '../components/home/About'
import { Footer } from '../components/layout/Footer'
import { Career } from '../components/home/Career'
import { Contact } from '../components/home/Contact'
import { Work } from '../components/home/Work'
import { useEffect, useState } from 'react'
import { Landing } from '../components/home/Landing'

const Home: NextPage = () => {
  const [show, setShow] = useState(true)
  const [scrollPos, setScrollPos] = useState(0);

  const controlNavBar = (event: any) => {
    if (event.deltaY > 0){
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('wheel',
    controlNavBar)
    return () => {
      window.removeEventListener('wheel', controlNavBar)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Nick Chinsen - Full Stack Developer</title>
        <meta name="description" content="Nick Chinsen full stack developer based in Toronto" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <LandingLayout show={show}>
        <Landing/>
        <Hero/>
        <About/>
        <Career/>
        <Work/>
        <Contact/>
      </LandingLayout>     
      <Footer/> 
    </div>
  )
}

export default Home
