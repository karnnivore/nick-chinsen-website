import React from 'react'
import styles from '../../styles/layout/Nav.module.css'

export const Nav = () => {
  return (
    <header className={styles.landingHeader}>
      <div className={styles.headerLinks}>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Career</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}