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
