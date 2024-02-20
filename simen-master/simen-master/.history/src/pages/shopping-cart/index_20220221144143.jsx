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
          <div className={styles.remove}></div>
          <div className={styles.remove}></div>
          <div className={styles.remove}></div>
          <div className={styles.remove}></div>
          <div className={styles.remove}></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
