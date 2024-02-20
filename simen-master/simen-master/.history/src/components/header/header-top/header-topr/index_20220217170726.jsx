import React from 'react';
import styles from './styles.module.scss';

function HeaderTopR() {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.item}>
        <ion-icon name="person"></ion-icon>
        <span className={styles.text}>My Account</span>
      </a>
      <a href="#" className={styles.item}>
        <ion-icon name="heart-outline"></ion-icon>
        <span className={styles.text}>Wishlist</span>
      </a>
      <a href="#" className={styles.item}>
        <ion-icon name="checkbox-outline"></ion-icon>
        <span className={styles.text}>Checkout</span>
      </a>
      <a href="#" className={styles.item}>
        <ion-icon name="checkbox-outline"></ion-icon>
        <span className={styles.text}>Login</span>
      </a>
    </div>
  );
}
export default HeaderTopR;
