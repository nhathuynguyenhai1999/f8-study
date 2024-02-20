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
              <th className={styles.remove}></th>
              <th className={styles.remove}>Product</th>
              <th className={styles.remove}>Price</th>
              <th className={styles.remove}>Quantity</th>
              <th className={styles.remove}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;
