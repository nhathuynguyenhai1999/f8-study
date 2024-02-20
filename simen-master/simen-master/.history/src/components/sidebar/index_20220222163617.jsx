import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [i, setI] = useState(0);

  setInterval(() => {
    if (i < items.length - 1) {
      setI(i + 1);
    } else {
      setI(0);
    }
  }, 1000);
  return (
    <div className={styles.sidebar}>
      {items
        .filter((item, index) => index + i < 6 + i)
        .map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
    </div>
  );
}
export default SideBar;
