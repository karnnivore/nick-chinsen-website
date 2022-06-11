import { useEffect } from 'react'
import styles from '../../styles/home/Contact.module.css'
import { PlainContainer } from '../common/PlainContainer'
import { RippleButton } from '../common/RippleButton'
import { SectionContainer } from '../layout/SectionContainer'

export const Contact = () => {
  return(
    <PlainContainer>
      <section className={styles.contactSection} id="contact-section">
        <h1 className={styles.contactNext}>What&apos;s Next?</h1>
        <h1 className={styles.contactConnect}>Lets Connect</h1>
        <p>My inbox is always open. If you have any questions or just want 
          to say hi, don&apos;t hesitate to reach out, I&apos;ll make sure to get back to you!</p> 
        <RippleButton link={"mailto: nicholaschinsen@gmail.com"} text={"Reach me"}/>
      </section>
    </PlainContainer>
  )
}