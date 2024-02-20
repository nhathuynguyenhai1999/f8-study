import React from 'react';
import styles from './styles.module.scss';

import { data } from './data.js';
function Header() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/logo.png"
        alt="Logo"
      />
      <div className={styles.service}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles['icon-box']}>
              <div className={styles['icon-div']}>
                <ion-icon className={styles.icon} name={item.icon}></ion-icon>
              </div>
            </div>
            <div className={styles['text-box']}>
              <p className={styles.title}>{item.title}</p>
              <span className={styles.sub}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Header;
