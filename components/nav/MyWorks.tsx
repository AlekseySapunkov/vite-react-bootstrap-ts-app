import React from "react"
import styles from "./MyWorks.module.scss"
const MyWorks = () => {
  return (
    <React.Fragment>
      <h1>Мои работы</h1>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img
            src="public/-4.jpg"
            alt="imageFinger"
          />
        </div>
        <div className={styles.img}>
          <img
            src="/home.jpg"
            alt="imageFinger"
          />
        </div>
        <div className={styles.img}>
          <img
            src="/bublek-ukazatel-tsk2.jpg"
            alt="imageFinger"
          />
        </div>
        <div className={styles.img}>
          <img
            src="public/-4.jpg"
            alt="imageFinger"
          />
        </div>
        <div className={styles.img}>
          <img
            src="public/-4.jpg"
            alt="imageFinger"
          />
        </div>
      </div>
    </React.Fragment>
  )

}
export default MyWorks