import React from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.box}>
          <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
export default SideBar;
