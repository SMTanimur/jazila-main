import React from 'react'
import styles from '../styles/loading.module.css'
export default function Preloader() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingCenter}>
        <div className={styles.loadingCenterAbsolute}>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
          <div className={styles.object}></div>
        </div>
      </div>
    </div>
  )
}
