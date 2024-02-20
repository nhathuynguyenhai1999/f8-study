import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [visibleSlide, setVisibleSlide] = useState(1);

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };
  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <div key={item.id} className={styles.box}>
          <img className={styles.img} src={item.imageUrl} key={item.id} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
export default SideBar;
