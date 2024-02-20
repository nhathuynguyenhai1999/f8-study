import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../components/custom-button/index';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className={styles['table-box']}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.remove}></th>
              <th className={styles.thumbnail}></th>
              <th className={styles.name}>Product</th>
              <th className={styles.price}>Price</th>
              <th className={styles.quantity}>Quantity</th>
              <th className={styles.subtotal}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.remove}>312</td>
              <td className={styles.thumbnail}>1231</td>
              <td className={styles.name}>Product</td>
              <td className={styles.price}>Price</td>
              <td className={styles.quantity}>Quantity</td>
              <td className={styles.subtotal}>Total</td>
            </tr>
            <tr>
              <td colSpan={6} className={styles.action}>
                <input type="text" />
                <CustomButton text="Apply Coupon" />
                <CustomButton text="Update cart" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;
