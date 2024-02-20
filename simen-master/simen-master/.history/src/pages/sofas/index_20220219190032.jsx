import React from 'react';
import styles from '../styles.module.scss';
import items from '../sofa-data.js';

import CustomButton from '../../components/custom-button/index';

function Sofas() {
  const itemsFilter = items.filter((item) => item.sofas === true);

  return (
    <>
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
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>$ {item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sofas;
