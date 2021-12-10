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
              <a>Experience</a>
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

      <main className={styles.main}>
        <section className={styles.landing}>
          <h3>Hi, I&apos;m</h3>
          <h1>Nick Chinsen.</h1>
          <h1>I love to build web applications.</h1>
          <p>I&apos;m a Toronto based full stack developer who specializes in creating 
            extraordinary digital experiences. Currently, I&apos;m a full stack developer,
            and life long learner creating human-centered products at <a>LBC IT</a>!
          </p>
          <button>
            Get in touch!
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Designed & Built with 	&#x2764; by Nick Chinsen</p>
      </footer>
    </div>
  )
}

export default Home
