import React from 'react';
import styles from './styles.module.scss';

function HeaderTopL() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/en.jpg"
          alt="English"
          className="header-top__language"
        />
        <span className={styles.text}>English</span>
        <ion-icon name="caret-down-outline"></ion-icon>
      </div>
      <div className={styles.item}>
        <span v>USD</span>
        <ion-icon name="caret-down-outline"></ion-icon>
      </div>
    </div>
  );
}
export default HeaderTopL;
