import React, { useEffect, useState } from 'react'
import styles from '../../styles/layout/MainContainer.module.css'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { EmailSidebar } from './EmailSidebar'

export const LandingLayout = ({children}: any) => {
  const [show, setShow] = useState(true)

  const controlNavBar = (event: any) => {
    if (event.deltaY > 0){
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('wheel',
    controlNavBar)
    return () => {
      window.removeEventListener('wheel', controlNavBar)
    }
  }, [])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* layout components */}
        <div className={styles.background}></div>
        <div className={styles.background2}></div>
        <div className={styles.background3}></div>
        <Nav show={show}/>
        <Sidebar/>
        <EmailSidebar/>
        {children}
      </main>
    </div>
  )
}