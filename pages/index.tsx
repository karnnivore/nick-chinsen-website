import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Chinsen - Full Stack Developer</title>
        <meta name="description" content="Nick Chinsen full stack developer based in Toronto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <img/>
        </div>
        <div className={styles.headerLinks}>
          <a>1. About</a>
          <a>2. Experience</a>
          <a>3. Work</a>
          <a>4. Contact</a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.landing}>
          <h3>Hai, I'm</h3>
          <h1>Nick Chinsen.</h1>
          <h1>I'm a full stack developer.</h1>
          <p>I'm a Toronto based full stack developer who specializes in creating 
            extraordinary digital experiences. Currently, I'm a full stack developer,
            and life long learner creating human-centered products at <a>LBC IT</a>.
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
