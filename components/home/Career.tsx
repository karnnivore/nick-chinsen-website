import { useState } from 'react'
import styles from '../../styles/home/Career.module.css'
import { CareerCards } from '../common/CareerCards'
import { PlainContainer } from '../common/PlainContainer'

export const Career = () => {
  const [currentTab, setCurrentTab] = useState(1)
  
  const setTab = (num: number) => {
    setCurrentTab(num)
  }

  return(
    <PlainContainer>
      <section className={styles.careerSection} id='career-section'>
        <h1>Places I&apos;ve worked</h1>
        <div className={styles.careerTableSection}>
          <div className={styles.careerth}>
            <a id="tab1" onClick={() => setTab(1)} className={`${currentTab == 1 && styles.selected}`}>
              <span>LBC IT</span>
            </a>
            <a id="tab3" onClick={() => setTab(2)} className={`${currentTab == 2 && styles.selected}`}>
              <span>DadoLinks</span>
            </a>
            <div className={styles.break}></div>
            <a id="tab4" onClick={() => setTab(3)} className={`${currentTab == 3 && styles.selected}`}>
              <span>Crue TV</span>
            </a>
            <a id="tab2" onClick={() => setTab(4)} className={`${currentTab == 4 && styles.selected}`}>
              <span>Freelance</span>
            </a>
          </div>
          <div className={styles.careertd}>
            <CareerCards selected={currentTab}/>
          </div>
        </div>
      </section>
    </PlainContainer>
  )
}