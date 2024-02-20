import React from 'react';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div>
      <div className={styles.image}>
        <img src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/01.png" alt="" />
      </div>
      <div className={styles.image}>
        <img src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/5.png" alt="" />
      </div>
      <div className={styles.image}>
        <img
          src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/banner1-300x286.jpg"
          alt=""
        />
      </div>
      <div className={styles.image}>
        <img src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/01.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;
