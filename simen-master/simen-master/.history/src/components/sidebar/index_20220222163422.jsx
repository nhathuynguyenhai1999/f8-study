import React, { useState } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [i, setI] = useState(0);

  (function () {
    setI(i + 1);
  })();
  return (
    <div className={styles.sidebar}>
      {items
        .filter((item, index) => index < 6)
        .map((item) => (
          <div key={item.id} className={styles.box}>
            <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
          </div>
        ))}
    </div>
  );
}
export default SideBar;
