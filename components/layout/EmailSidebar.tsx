import React from 'react';
import styles from '../../styles/layout/EmailSidebar.module.css'

export const EmailSidebar = () => {
  return(
    <div className={styles.sidebarEmail}>
      <a>nicholaschinsen@gmail.com</a>
      <div className={styles.emailLine}></div>
    </div>
  )
}