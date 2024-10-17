import React from "react"
import styles from "./MyWorks.module.scss"
const MyWorks=()=>{
    return (
       <React.Fragment>
                <h1>Мои работы</h1>
        <div className={styles.wrapper}>
          <div className={styles.img}>
            <div title="image" className={styles.img1}></div>
          </div>
          <div className={styles.img}>
            <div title="image" className={styles.img3}></div>
          </div>
          <div className={styles.img}>
            <div title="image" className={styles.img1}></div>
          </div>
          <div className={styles.img}>
            <div title="image" className={styles.img3}></div>
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