import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../custom-button/index';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles['cart-box']}>
        <div className={styles['cart-icon-box']}>
          <ion-icon name="cart"></ion-icon>
        </div>
        <span className={styles['cart-text']}>0</span>
        <span>( items )</span>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          <div className={styles.container}>
            <ul className={styles.list}>
              <li className={styles.item}>No products in the cart</li>
              <li>
                <img src="" alt="" />
                <span></span>
                <span></span>
              </li>
            </ul>
            <div className={styles.total}>
              <span>Total:</span>
              <span className={styles['total-price']}>$16.00</span>
            </div>
            <div className={styles['button-box']}>
              <CustomButton className={styles.button} text="Go to cart" />
              <CustomButton className={styles.button} text="Checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
