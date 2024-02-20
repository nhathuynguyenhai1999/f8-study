import React from 'react';
import styles from './styles.module.scss';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
      <div className={styles.box}>
        <img className={styles.img} src="../../assets/img/avan.png" alt="Avan" />
      </div>
    </div>
  );
}
export default SideBar;
