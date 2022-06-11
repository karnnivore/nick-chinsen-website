import { SectionContainer } from "../layout/SectionContainer"
import styles from "../../styles/home/Landing.module.css"
import Image from 'next/image'
import { useState } from "react"
import Tilt from 'react-parallax-tilt'

export const Landing = () => {
  const sectionList=[
    '#landing-section',
    '#hero-section',
    '#about-section'
  ]
  const [link, setLink] = useState('#landing-section')
  const [linkText, setLinkText] = useState('H I')
  const [hide, setHide] = useState(false)
  const [flipVertically, setFlipVertically] = useState(false);

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
          {/* <a href="#hero-section"> */}
          <a onClick={() => setFlipVertically(!flipVertically)}>
            <Tilt 
              glareEnable={true} 
              glareMaxOpacity={0.8} 
              glareColor="#ffffff" 
              glarePosition="bottom" 
              glareBorderRadius="20px" 
              style={{zIndex: 55}}
              flipVertically={flipVertically}
            >
              <img
              src="/images/NLogo2.svg"
              className={styles.n2}
              height={500}
              width={500}
              />
            </Tilt>
          </a>
          {/* </a> */}
        </div>
        <a href={link} className={`${styles.hiButton} ${hide && styles.hide}`} onClick={handleArrow}>
          <span>{linkText}</span>
          <img src="/images/chevron-down-solid.svg" height={35} width={35}/>
        </a>
      </div>
    </SectionContainer>
  )
}