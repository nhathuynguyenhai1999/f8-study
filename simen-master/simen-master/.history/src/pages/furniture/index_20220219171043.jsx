import React from 'react';
import styles from './styles.module.scss';
import items from '../../data.js';

import CustomButton from '../../components/custom-button/index';

function Furniture() {
  return (
    <>
      <h1>Furniture</h1>
      <div className={styles.container}>
        {items
          .filter((item) => item.furniture === true)
          .map((item) => (
            <div className={styles.item}>
              <div className={styles.image}>
                <img src={item.imageUrl} alt="" />
                <CustomButton text="ADD TO CART" className={styles.button} />
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
export default Furniture;
