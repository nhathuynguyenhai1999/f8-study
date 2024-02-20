import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideHandler = () => {
    setTimeout(() => {
      if (slideHandler < items.length - 1) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }, 1000);
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
