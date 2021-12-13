import { SectionContainer } from "../layout/SectionContainer"
import styles from "../../styles/home/Landing.module.css"
import Image from 'next/image'

export const Landing = () => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  )
}