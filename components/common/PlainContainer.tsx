import styles from "../../styles/common/PlainContainer.module.css"

export const PlainContainer = ({children, id} : any) => {
  return(
    <div className={styles.plainContainer} id={id}>
      <div className="siteContainer">
        {children}
      </div>
    </div>
  )
}