import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../components/custom-button/index';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className={styles.table}>
        <div className={styles.container}>
          <div className={styles.remove}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.names}></div>
          <div className={styles.price}></div>
          <div className={styles.quantity}></div>
          <div className={styles.subtotal}></div>
        </div>
        <div>
          <div className={styles.remove}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.names}></div>
          <div className={styles.price}></div>
          <div className={styles.quantity}></div>
          <div className={styles.subtotal}></div>
        </div>
        <div className={styles.actions}>
          <input type="text" />
          <CustomButton text="Apply coupon" />
          <CustomButton text="update cart" />
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
