import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkedinIcon from '../components/icons/LinkedinIcon';
import InstaIcon from '../components/icons/InstaIcon';
import GithubIcon from '../components/icons/GithubIcon';
import CodepenIcon from '../components/icons/CodepenIcon';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Chinsen - Full Stack Developer</title>
        <meta name="description" content="Nick Chinsen full stack developer based in Toronto" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.landingHeader}>
        <div>
          <img/>
        </div>
        <div className={styles.headerLinks}>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </header>

      <div className={styles.sideBarSocials}>
        <ul>
          <li>
            <a><GithubIcon/></a>
          </li>
          <li>
            <a><CodepenIcon/></a>
          </li>
          <li>
            <a><InstaIcon/></a>
          </li>
          <li>
            <a><LinkedinIcon/></a>
          </li> 
          <div className={styles.verticalLine}></div>
        </ul>
      </div>

      <div className={styles.sidebarEmail}>
        <a>nicholaschinsen@gmail.com</a>
        <div className={styles.emailLine}></div>
      </div>

      <main className={styles.main}>
        <section className={styles.landingTextSection}>
          <h3>Hi, I&apos;m</h3>
          <h1>Nick Chinsen.</h1>
          <h1>I love to build web applications.</h1>
          <p>
            I&apos;m a Toronto based full stack developer who specializes in creating 
            extraordinary digital experiences. Currently, I&apos;m a full stack developer,
            and life long learner creating human-centered products at <a>LBC IT</a>!
          </p>
          <button>
            Get in touch!
          </button>
        </section>
        <section className={styles.aboutSection}>
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
            I've had the pleasure of working at <a>a web development agency</a>, 
            <a>a small business</a>, <a>a local non-profit</a>, and I've done freelance
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
        <section className={styles.careerSection}>
          <h1>Places I've worked</h1>
        </section>
        <section className={styles.workSection}>
          <h1>A Few Things I've Built</h1>
        </section>
        <section className={styles.contactSection}>
          <h1>What's Next?</h1>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Designed & Built with 	&#x2764; by Nick Chinsen</p>
      </footer>
    </div>
  )
}

export default Home
