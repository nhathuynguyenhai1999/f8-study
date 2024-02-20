import React, { useState } from 'react';
import styles from './styles.module.scss';
import items from '../data.js';

import Product from '../../components/cart-items/Product/index';
import CustomButton from '../../components/custom-button/index';

import img1 from '../../assets/poster/1.png';
import img2 from '../../assets/poster/2.png';
import img3 from '../../assets/poster/3.jpg';
import img4 from '../../assets/poster/4.jpg';

function HomePage() {
  const [loadItem, setLoadItem] = useState(4);
  const [textButton, setTextButton] = useState('Load more items');

  const itemsFilter = items.filter((item, index) => index < loadItem);

  const loadHandler = () => {
    setTextButton('Loading...');
    setTimeout(() => {
      setLoadItem(loadItem + 4);
      setTextButton('Load more items');
    }, 1000);
  };
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.box1}>
          <img className={styles.img1} src={img1} alt="" />
        </div>
        <div className={styles.box2}>
          <img className={styles.img2} src={img2} alt="" />
        </div>
        <div className={styles.box3}>
          <img className={styles.img} src={img3} alt="" />
        </div>
        <div className={styles.box4}>
          <img className={styles.img} src={img4} alt="" />
        </div>
      </div>
      <Product itemsFilter={itemsFilter} />
      <div className={styles['load-box']}>
        <CustomButton onClick={loadHandler} className={styles['load-button']} text={textButton} />
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
          <CustomButton text="buy now" className={styles.button} />
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-box']}>
          <img
            className={styles['banner-img']}
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2011/05/baner-shipping.jpg"
            alt=""
          />
        </div>
        <div className={styles['banner-box']}>
          <img
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/banner3.jpg"
            alt=""
          />
        </div>
        <div className={styles['banner-box']}>
          <img
            src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/banner4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
