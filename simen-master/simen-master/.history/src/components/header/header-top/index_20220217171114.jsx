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
        <div className={styles.container}>
          <div className={styles.item}>
            <img
              src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/en.jpg"
              alt="English"
              className="header-top__language"
            />
            <span className={styles.leftText}>English</span>
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
          <div className={styles.item}>
            <span className={styles.leftText}>USD</span>
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
        </div>
      </div>
    </FullWidth>
  );
}
export default HeaderTop;
