import React from 'react'
import styles from '../../styles/home/About.module.css'
import { SectionContainer } from '../layout/SectionContainer'

export const About = () => {
  return (
    <SectionContainer>
      <section className={styles.aboutSection} id="about-section">
        <h1>About me</h1>
        <p>
          Hi! My name is Nicholas but I usually go by Nick, I love developing interesting
          things for the web. My first foray into web development was my first website 
          which I built in 2012 (basic html/css forever hidden from the world &#9786;) - 
          That project sparked my initial obsession with web development and later coding 
          which has continued till today. Since then I haven&apos;t stopped tinkering, 
          striving to learn something new every single day. 
        </p>
        <p>
          I&apos;ve had the pleasure of working at <a>a web development agency</a>, 
          <a>a small business</a>, <a>a local non-profit</a>, and I&apos;ve done freelance
          projects throughout it all. Nowadays my main focus is building responsive & 
          accessible full-stack applications and expereinces at <a>LBC IT Solutions</a> 
          for a wide range of clients.
        </p>
        <p>
          Here are some of the technologies I have been working with recently:
          <ul className={styles.listAboutMe}>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>.NET</li>
            <li>WordPress</li>
            <li>Python</li>
          </ul>
        </p>
      </section>
    </SectionContainer>
  )
}