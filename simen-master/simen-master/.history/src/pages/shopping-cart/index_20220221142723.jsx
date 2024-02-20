import React from 'react';
import styles from './styles.module.scss';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className={styles.table}>
        <table>
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
              <td className={styles.remove}></td>
              <td className={styles.thumbnail}></td>
              <td className={styles.name}>Product</td>
              <td className={styles.price}>Price</td>
              <td className={styles.quantity}>Quantity</td>
              <td className={styles.subtotal}>Total</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;
