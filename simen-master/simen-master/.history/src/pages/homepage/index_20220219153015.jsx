import React from 'react';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles['home-page']}>
        <div className={styles.box1}>
          <img
            className={styles.img1}
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/01.png"
            alt=""
          />
        </div>
        <div className={styles.box2}>
          <img
            className={styles.img2}
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/5.png"
            alt=""
          />
        </div>
        <div className={styles.box3}>
          <img
            className={styles.img}
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/banner1-300x286.jpg"
            alt=""
          />
        </div>
        <div className={styles.box4}>
          <img
            className={styles.img}
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/banner2-300x286.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
