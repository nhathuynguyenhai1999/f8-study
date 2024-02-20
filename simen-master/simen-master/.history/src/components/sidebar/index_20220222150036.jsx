import React from 'react';
import styles from './styles.module.scss';

import items from './data.js';

function SideBar() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideHandler = () => {
    setSlideIndex(slideIndex + 1);
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
