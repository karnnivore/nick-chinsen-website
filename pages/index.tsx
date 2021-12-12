import type { NextPage } from 'next'
import Head from 'next/head'
import { LandingLayout } from '../components/layout/LandingLayout'
import { Hero } from '../components/home/Hero'
import { About } from '../components/home/About'
import { Footer } from '../components/layout/Footer'
import { Career } from '../components/home/Career'
import { Contact } from '../components/home/Contact'
import { Work } from '../components/home/Work'
import { useRef, useState } from 'react'

const Home: NextPage = () => {
  // TODO: Need to iron out custom scroll lock feature
  // const sectionList = ['hero-section', 'about-section', 'career-section', 'work-section', 'contact-section']
  // const [current, setCurrent] = useState(0)

  // const onScroll = (e: any) => {
  //   if (e.deltaY > 0) {
  //     console.log('Scrolling Down')
  //     scrollDownToElement(current)
  //   } else {
  //     console.log('Scrolling Up')
  //     scrollUpToElement(current)
  //   }
  // }

  // const scrollDownToElement = (current: number) => {
  //   console.log(current)
  //   let id = sectionList[current+1]
  //   let element = document.getElementById(id)
  //   element?.scrollIntoView({
  //     behavior: 'auto',
  //     block: 'center',
  //     inline: 'center'
  //   })    
  //   if (current < sectionList.length - 1){
  //     current += 1
  //   }
  //   setCurrent(current)
  // }

  // const scrollUpToElement = (current: number) => {
  //   console.log(current)
  //   let id = sectionList[current-1]
  //   let element = document.getElementById(id)
  //   if (current > 0) {
  //     current -= 1
  //   }
  //   element?.scrollIntoView({
  //     behavior: 'auto',
  //     block: 'center',
  //     inline: 'center'
  //   })    
  //   setCurrent(current)
  // }

  return (
    // <div onWheel={onScroll}>
    <div>
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
    </div>
  )
}

export default Home
