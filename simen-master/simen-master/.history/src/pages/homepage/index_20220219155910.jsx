import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../components/custom-button/index';

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
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
      <div className={styles.hero}>
        <div className={styles['hero-img']}>
          <img
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/call-to-action.jpg"
            alt=""
          />
        </div>
        <div className={styles['hero-content']}>
          <h2 className={styles['hero-title']}>AXEL - STOOL</h2>
          <h4 className={styles['hero-sub']}>NEW PRODUCTS</h4>
          <p className={styles['hero-text']}>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It
            has survived not only five centuries,
          </p>
          <CustomButton text="buy now" />
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles['sidebar-box']}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
