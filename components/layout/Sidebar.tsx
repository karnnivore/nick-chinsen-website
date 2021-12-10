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
          <a><GithubIcon/></a>
        </li>
        <li>
          <a><CodepenIcon/></a>
        </li>
        <li>
          <a><InstaIcon/></a>
        </li>
        <li>
          <a><LinkedinIcon/></a>
        </li> 
        <div className={styles.verticalLine}></div>
      </ul>
    </div>
  )
}