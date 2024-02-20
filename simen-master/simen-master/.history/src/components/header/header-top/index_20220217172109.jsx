import React from 'react';
import styles from './styles.module.scss';

import FullWidth from '../../container/full-width/index';

function HeaderTop() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <a href="#" className={`${styles.item} ${styles['item-first']}`}>
          <img
            src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/en.jpg"
            alt="English"
            className={styles.image}
          />
          <span className={styles['left-text']}>English</span>
          <ion-icon name="caret-down-outline"></ion-icon>
        </a>
        <a href="#" className={styles.item}>
          <span className={styles['left-text']}>USD</span>
          <ion-icon name="caret-down-outline"></ion-icon>
        </a>
      </div>
      <div className={styles.container}>
        <a href="#" className={`${styles.item} ${styles['item-right']}`}>
          <ion-icon name="person"></ion-icon>
          <span className={styles['right-text']}>My Account</span>
        </a>
        <a href="#" className={`${styles.item} ${styles['item-right']}`}>
          <ion-icon name="heart-outline"></ion-icon>
          <span className={styles['right-text']}>Wishlist</span>
        </a>
        <a href="#" className={`${styles.item} ${styles['item-right']}`}>
          <ion-icon name="checkbox-outline"></ion-icon>
          <span className={styles['right-text']}>Checkout</span>
        </a>
        <a href="#" className={`${styles.item} ${styles['item-right']}`}>
          <ion-icon name="checkbox-outline"></ion-icon>
          <span className={styles['right-text']}>Login</span>
        </a>
      </div>
    </div>
  );
}
export default HeaderTop;
