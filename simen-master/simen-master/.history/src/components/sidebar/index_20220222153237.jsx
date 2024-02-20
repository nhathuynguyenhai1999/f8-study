import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div key={item.id} className={styles.box}>
          {setTimeout(() => {
            if (item.id === items.length - 1) {
              item.id = 0;
            } else {
              item.id += 1;
            }
          }, 1000)}
          <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
export default SideBar;
