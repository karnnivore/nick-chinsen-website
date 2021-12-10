import React from 'react'
import styles from '../../styles/layout/MainContainer.module.css'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { EmailSidebar } from './EmailSidebar'

export const LandingLayout = ({children}: any) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* layout components */}
        <div className={styles.background}></div>
        <Nav/>
        <Sidebar/>
        <EmailSidebar/>
        {children}
      </main>
    </div>
  )
}