import React from 'react'
import styles from '../../styles/home/About.module.css'
import { SectionContainer } from '../layout/SectionContainer'
import Image from 'next/image'
import { PlainContainer } from '../common/PlainContainer'

export const About = () => {
  const lbc = "https://lbcit.ca/"
  const axcys = "http://www.axcysfinishing.ca/about.html"
  const crueTV = "https://cruetv.com/home"
  return (
    <PlainContainer>
      <section className={styles.aboutSection} id="about-section">
        <div className={styles.textContainer}>
          <h1>About me</h1>
          <p>
            Hi! My name is Nicholas but I usually go by Nick, I love developing interesting
            things for the web. 
          </p>  
          <p>
            My first foray into web development was my first website 
            which I built in 2012 (basic html/css forever hidden from the world &#9786;) - 
            That project sparked my initial obsession with web development and later coding 
            which has continued till today. 
          </p>
          <p>
            Since then, I&apos;ve gone to and finished school for
            computer science and I haven&apos;t stopped tinkering, striving to learn something new 
            every single day. 
          </p>
          <p>
            I&apos;ve had the pleasure of working at <a href={lbc} target="_blank" rel="noreferrer">a web development agency</a>, 
            <a href={axcys} target="_blank" rel="noreferrer"> a small business</a>, 
            <a href={crueTV} target="_blank" rel="noreferrer"> a local non-profit</a>, and I&apos;ve done freelance
            projects throughout it all. Nowadays my main focus is building responsive & 
            accessible full-stack applications and experiences at <a href={lbc} target="_blank" rel="noreferrer">LBC IT Solutions </a> 
            for a wide range of clients.
          </p>
          <p>
            Here are some of the technologies I have been working with recently:
          </p>
          <ul className={styles.listAboutMe}>
            <li>TypeScript</li>
            <li>JavaScript ES6+</li>
            <li>React</li>
            <li>.NET</li>
            <li>WordPress</li>
            <li>Python</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.headshotImage}
            src="/images/nick.jpg"
            alt="Picture of me Nick"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
      </section>
    </PlainContainer>
  )
}