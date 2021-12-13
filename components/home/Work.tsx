import styles from '../../styles/home/Work.module.css'
import { PlainContainer } from '../common/PlainContainer'
import { SectionContainer } from '../layout/SectionContainer'

export const Work = () => {
  return(
    <PlainContainer>
      <section className={styles.workSection} id="work-section">
        <h1>A Few Things I&apos;ve Built</h1>
      </section>
    </PlainContainer>
  )
}