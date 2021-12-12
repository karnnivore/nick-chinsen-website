import React from 'react'
import styles from '../../styles/layout/Sidebar.module.css'
import CodepenIcon from '../icons/CodepenIcon'
import GithubIcon from '../icons/GithubIcon'
import InstaIcon from '../icons/InstaIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export const Sidebar = () => {
  return (
    <div className={styles.sideBarSocials}>
      <ul>
        <li>
          <a href="https://github.com/karnnivore" target="blank"><GithubIcon/></a>
        </li>
        <li>
          <a href="https://codepen.io/karnnivore-the-animator" target="_blank"><CodepenIcon/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nick-chinsen/" target="_blank"><LinkedinIcon/></a>
        </li> 
        <div className={styles.verticalLine}></div>
      </ul>
    </div>
  )
}