import React from 'react';
import styles from '../../styles/layout/EmailSidebar.module.css'

export const EmailSidebar = () => {
  return(
    <div className={styles.sidebarEmail}>
      <a href="mailto: nicholaschinsen@gmail.com">nicholaschinsen@gmail.com</a>
      <div className={styles.emailLine}></div>
    </div>
  )
}