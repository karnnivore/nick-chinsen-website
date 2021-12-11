import styles from '../../styles/home/Work.module.css'
import { SectionContainer } from '../layout/SectionContainer'

export const Work = () => {
  return(
    <SectionContainer>
      <section className={styles.workSection}>
        <h1>A Few Things I&apos;ve Built</h1>
      </section>
    </SectionContainer>
  )
}