import styles from '../../styles/home/Hero.module.css'
import { SectionContainer } from '../layout/SectionContainer'

export const Hero = () => {
  return(
    <SectionContainer>
      <section className={styles.landingTextSection}>
        <div className={styles.sectionContainer}>
          <h3 className={styles.hi}>Hi, my name is</h3>
          <h1 className={styles.name}>Nick Chinsen.</h1>
          <h2 className={styles.nameSubText}>I love to build web apps.</h2>
          <p className={styles.landingIntroText}>
            I&apos;m a Toronto based full stack developer who specializes in creating 
            extraordinary digital experiences. Currently, I&apos;m a full stack developer,
            and life long learner creating human-centered products at <a>LBC IT</a>.
          </p>
          <button>
            Get in touch!
          </button>
        </div>
      </section>
    </SectionContainer>
  )
}