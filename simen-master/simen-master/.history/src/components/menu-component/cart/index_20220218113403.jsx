import React from 'react';
import styles from './styles.module.scss';

function Cart() {
  return (
    <div className={styles.search}>
      <ion-icon name="cart" className={styles['search-icon']}></ion-icon>
      <span>0</span>
      <span>(items)</span>
    </div>
  );
}
export default Cart;
