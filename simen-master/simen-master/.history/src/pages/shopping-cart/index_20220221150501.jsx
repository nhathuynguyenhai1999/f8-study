import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../../components/custom-button/index';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className={styles.table}>
        <div className={styles.container}>
          <div className={`${styles.remove} ${styles.head}`}>&nbsp;</div>
          <div className={styles.remove}>
            <ion-icon name="close-circle"></ion-icon>
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.thumbnail} ${styles.head}`}>&nbsp;</div>
          <div className={styles.thumbnail}>
            <img
              src="http://demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/10-215x260.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.name} ${styles.head}`}>Product</div>
          <div className={styles.name}>Modular Modern</div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.price} ${styles.head}`}>Price</div>
          <div className={styles.price}>$ 2.00</div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.quantity} ${styles.head}`}>Quantity</div>
          <div className={styles.quantity}>
          <input type="number" id="quantity_62133239937a7" class="input-text qty text" step="1" min="0" max="" name="cart[283085d30e10513624c8cece7993f4de][qty]" value="1" title="Qty" size="4" inputmode="numeric">
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.subtotal} ${styles.head}`}>Total</div>
          <div className={styles.subtotal}>$ 2.00</div>
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
