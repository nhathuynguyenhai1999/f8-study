import React from 'react';
import styles from './styles.module.scss';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.box}>
        <img src="../../assets/img/avan.png" alt="Avan" />
      </div>
    </div>
  );
}
export default SideBar;
