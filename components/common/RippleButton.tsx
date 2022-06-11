import { useEffect } from "react";
import styles from '../../styles/common/RippleButton.module.css'

interface IRippleButtonProps {
  link: string;
  text: string;
}

export const RippleButton = ({link, text}: IRippleButtonProps) => {
  const buttonEffect = (event: any) => {
    const styledButton = document.querySelectorAll('.rippleButton')

    let x = event.pageX - event.target.offsetLeft;
    let y = event.pageY - event.target.offsetTop;
    
    let ripples = document.createElement('span');
    ripples.classList.add('rippleSpan')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    styledButton.forEach((btn: any) => {
      btn.appendChild(ripples);
    })

    setTimeout(() => {
      ripples.remove()
    }, 1000)
  }

  useEffect(() => {
    const styledButton = document.querySelectorAll('.rippleButton')

    styledButton.forEach((btn: any) => {
      btn.addEventListener('click',
      buttonEffect)
    })
    return () => {
      styledButton.forEach((btn: any) => {
        btn.removeEventListener('click', buttonEffect)
      })
    }
  }, [])

  return(
    <>
      <a href={link} className={`rippleButton ${styles.rippleButton}`}>
        <span className={styles.leftSpan}></span> 
        <span className={styles.spans}></span> 
        <span className={styles.spans}></span> 
        <span className={styles.spans}></span> 
        {text}
      </a>
    </>
  )
}