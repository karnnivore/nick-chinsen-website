import styles from "../../styles/layout/SectionContainer.module.css"

export const SectionContainer = ({children} : any) => {
  return(
    <div className={styles.sectionContainer}>
      {children}
    </div>
  )
}