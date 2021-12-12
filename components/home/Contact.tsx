import { useEffect } from 'react'
import styles from '../../styles/home/Contact.module.css'
import { RippleButton } from '../common/RippleButton'
import { SectionContainer } from '../layout/SectionContainer'

export const Contact = () => {
  return(
    <>
      <section className={styles.contactSection} id="contact-section">
        <h1 className={styles.contactNext}>What&apos;s Next?</h1>
        <h1 className={styles.contactConnect}>Lets Connect</h1>
        <p>My inbox is always open. If you have any questions or just want 
          to say hi, don't hesitate to reach out, I'll make sure to get back to you!</p> 
        <RippleButton link={"#contactSection"} text={"Reach me"}/>
      </section>
    </>
  )
}