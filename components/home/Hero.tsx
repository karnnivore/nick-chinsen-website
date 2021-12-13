import styles from '../../styles/home/Hero.module.css'
import { RippleButton } from '../common/RippleButton'
import { SectionContainer } from '../layout/SectionContainer'

export const Hero = () => {
  return(
    <SectionContainer>
      <section className={styles.landingTextSection} id="hero-section">
        <div className={styles.sectionContainer}>
          <h1 className={styles.name}>Nick Chinsen</h1>
          <h2 className={styles.nameSubText}>Innovation never stops I don&apos;t either</h2>
          <p className={styles.landingIntroText}>
            I&apos;m a full stack developer who specializes in creating 
            extraordinary digital experiences. I&apos;m currently developing accessible,
            modern products at <a>LBC IT Solutions</a>.
          </p>
          <RippleButton text={"Get in touch!"} link={"#contact-section"}/>
        </div>
      </section>
    </SectionContainer>
  )
}