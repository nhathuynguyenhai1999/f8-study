import React from 'react';
import styles from './styles.module.scss';

import FullWidth from '../../container/full-width/index';
import HeaderTopR from './header-topr/index';
import HeaderTopL from './header-topl/index';

function HeaderTop() {
  return (
    <FullWidth>
      <div className={styles.main}>
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
        <HeaderTopR />
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
