import React, { useEffect, useState } from 'react'
import styles from '../../styles/layout/Nav.module.css'

interface INavProps {
  show: boolean;
}
export const Nav = ({show} : INavProps)=> {
  
  return (
    <header className={`${show ? styles.landingHeader : styles.headerHide}`}>
      <div className={styles.headerLinks}>
        <ul>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#career-section">Career</a>
          </li>
          <li>
            <a href="#work-section">Work</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}