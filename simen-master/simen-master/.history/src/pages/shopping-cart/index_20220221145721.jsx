import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../components/custom-button/index';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className={styles.table}>
        <div className={styles.container}>
          <div className={styles.remove}>&nbsp;</div>
          <div className={styles.remove}>
            <ion-icon name="close-circle"></ion-icon>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.thumbnail}>2</div>
          <div className={styles.thumbnail}>2</div>
        </div>
        <div className={styles.container}>
          <div className={styles.name}>Product</div>
          <div className={styles.name}>Product</div>
        </div>
        <div className={styles.container}>
          <div className={styles.price}>Price</div>
          <div className={styles.price}>Price</div>
        </div>
        <div className={styles.container}>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.quantity}>Quantity</div>
        </div>
        <div className={styles.container}>
          <div className={styles.subtotal}>Total</div>
          <div className={styles.subtotal}>Total</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.coupon}>
            <input type="text" />
            <CustomButton text="Apply coupon" />
          </div>
          <CustomButton text="update cart" />
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
