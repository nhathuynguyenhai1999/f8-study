import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.prev}>
        {items.map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
      </div>

      <div>
        {items.map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className={styles.back}>
        {items.map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SideBar;
