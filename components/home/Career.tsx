import { useState } from 'react'
import styles from '../../styles/home/Career.module.css'
import { SectionContainer } from '../layout/SectionContainer'

export const Career = () => {
  const [currentTab, setCurrentTab] = useState(0)
  
  const setTab = (num: number) => {
    setCurrentTab(num)
  }

  return(
    <>
      <section className={styles.careerSection} id='career-section'>
        <h1>Places I&apos;ve worked</h1>
        <div className={styles.careerTableSection}>
          <div className={styles.careerth}>
            <a id="tab1" onClick={() => setTab(1)} className={`${currentTab == 1 && styles.selected}`}>
              <span>LBC IT</span>
            </a>
            <a id="tab2" onClick={() => setTab(2)} className={`${currentTab == 2 && styles.selected}`}>
              <span>Freelance</span>
            </a>
            <a id="tab3" onClick={() => setTab(3)} className={`${currentTab == 3 && styles.selected}`}>
              <span>DadoLinks</span>
            </a>
            <a id="tab4" onClick={() => setTab(4)} className={`${currentTab == 4 && styles.selected}`}>
              <span>Crue TV</span>
            </a>
          </div>
          <div className={styles.careertd}>
            <div className={styles.careerCard}>
              <h3>Full Stack Developer <span>@ LBC IT</span></h3>
              <h4>Developing enterprise web applications for TELUS & TIFF and other clients</h4>
              <h4>(React, .NET, TypeScript, Bootstrap, CSS, HTML, SQL, Git, SQL Server, Azure, PHP, Ruby)</h4>
              <h4>April 2021 - Present</h4>
              <ul>
                <li>
                  Develop reusable web components using Typescript & Bootstrap for enterprise React/.Net application
                </li>
                <li>
                  Debug and create solutions for problems within existing codebase   
                </li>
                <li>
                  Create REST APIs using .NET to connect backend & frontend
                </li>
                <li>
                  Design repository functions to efficiently query database tables
                </li>
                <li>
                  Update legacy websites using HTML, CSS, Typescript, PHP, and Ruby
                </li>
                <li>
                  Interact with business partners gathering needs and feedback for components
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}