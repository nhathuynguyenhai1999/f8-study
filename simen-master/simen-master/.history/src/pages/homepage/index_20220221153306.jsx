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
          <CustomButton text="buy now" className={styles.button} />
        </div>
      </div>
      <div className={styles['total-item']}>{itemsFilter.length} items</div>
      <div className={styles.container}>
        {itemsFilter.map((item) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.imageUrl} alt="" />
              <div className={styles.note}>
                <CustomButton
                  text={`ADD TO CART`}
                  className={styles.button}
                  icon={<ion-icon name="cart"></ion-icon>}
                />
                <div className={styles['icon-box']}>
                  <CustomButton className={styles.icon} icon={<ion-icon name="heart"></ion-icon>} />
                  <CustomButton
                    className={styles.icon}
                    icon={<ion-icon name="shuffle"></ion-icon>}
                  />
                  <CustomButton className={styles.icon} icon={<ion-icon name="eye"></ion-icon>} />
                </div>
              </div>
              {item.sale && <span className={styles.sale}>Sales!</span>}
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>$ {item.price}.00</p>
            </div>
          </div>
        ))}
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
