import { SectionContainer } from "../layout/SectionContainer"
import styles from "../../styles/home/Landing.module.css"
import Image from 'next/image'
import { useState } from "react"

export const Landing = () => {
  const sectionList=[
    '#landing-section',
    '#hero-section',
    '#about-section'
  ]
  const [link, setLink] = useState('#landing-section')
  const [linkText, setLinkText] = useState('H I')
  const [hide, setHide] = useState(false)

  const handleArrow = () => {
    let id = sectionList.indexOf(link)
    setLink(sectionList[id + 1])
    
    if (id == 0)
      setLinkText('About')
    if (id == 1)
      setHide(true)
  }

  return (
    <SectionContainer>
      <div className={styles.landingContainer}> 
        <div className={styles.imageContainer}>
          <img
          src="/images/N1.svg"
          className={styles.n1}
          height={500}
          width={500}
          />
          <img
          src="/images/N2.svg"
          className={styles.n2}
          height={500}
          width={500}
          />
          <img
          src="/images/N3.svg"
          className={styles.n3}
          height={500}
          width={500}
          />
        </div>
        <a href={link} className={`${styles.hiButton} ${hide && styles.hide}`} onClick={handleArrow}>
          <span>{linkText}</span>
          <img src="/images/chevron-down-solid.svg" height={35} width={35}/>
        </a>
      </div>
    </SectionContainer>
  )
}