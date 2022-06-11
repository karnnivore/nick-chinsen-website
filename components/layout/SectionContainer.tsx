import styles from "../../styles/layout/SectionContainer.module.css"

export const SectionContainer = ({children, id} : any) => {
  return(
    <div className={styles.sectionContainer} id={id}>
      {children}
    </div>
  )
}