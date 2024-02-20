import React from 'react';
import styles from './styles.module.scss';

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
        <ul>
        <li>No products in the cart</>
        </ul>
        </div>
      </div>
    </div>
  );
}
export default Cart;
