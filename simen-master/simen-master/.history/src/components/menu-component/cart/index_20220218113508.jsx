import React from 'react';
import styles from './styles.module.scss';

function Cart() {
  return (
    <div className={styles.search}>
      <div className={styles['search-icon-box']}>
        <ion-icon name="cart"></ion-icon>
      </div>
      <span>0</span>
      <span>(items)</span>
    </div>
  );
}
export default Cart;
