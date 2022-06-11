import React, { useEffect, useState } from 'react'
import styles from '../../styles/layout/Nav.module.css'
import Image from 'next/image'

interface INavProps {
  show: boolean;
}
export const Nav = ({show} : INavProps)=> {
  
  return (
    <header className={`${show ? styles.landingHeader : styles.headerHide}`}>
      <div className={styles.headerLinks}>
        <ul>
          <a href="#">
            <Image
              src="/images/NLogo.svg"
              height={50}
              width={50}
              className={styles.headerLogo}
            />
          </a>
          <li>
            <a href="#about-section" className={styles.link}>About</a>
          </li>
          <li>
            <a href="#career-section" className={styles.link}>Career</a>
          </li>
          {/* <li>
            <a href="#work-section">Work</a>
          </li> */}
          <li>
            <a href="#contact-section" className={styles.link}>Contact</a>
          </li>
          <li>
            <a href="/Nick_Chinsen_Resume.pdf" target="_blank" className={styles.link}>Resume</a>
          </li>
        </ul>
      </div>
    </header>
  )
}