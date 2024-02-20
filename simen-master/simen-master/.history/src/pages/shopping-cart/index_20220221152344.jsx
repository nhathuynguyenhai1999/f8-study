import React from 'react';
import styles from './styles.module.scss';

import { Input } from 'antd';
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
            <input
              type="number"
              className="input-text qty text"
              step="1"
              min="0"
              max=""
              value="1"
              title="Qty"
              inputmode="numeric"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.subtotal} ${styles.head}`}>Total</div>
          <div className={styles.subtotal}>$ 2.00</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.coupon}>
            <Input className={styles.input} placeholder="Coupon code" />
            <CustomButton className={styles.button} text="Apply coupon" />
          </div>
          <CustomButton className={styles.button} text="update cart" />
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles['cart-box']}>
          <h4>CART TOTALS</h4>
          <div className={styles['cart-table']}>
            <div className={styles['cart-content']}>
              <div className={styles['cart-head']}>Subtotal</div>
              <div className={styles['cart-head']}>Shipping</div>
              <div className={styles['cart-head']}>Total</div>
            </div>
            <div className={styles['cart-content']}>
              <div className={styles['cart-info']}>$ 16.00</div>
              <div className={styles['cart-info']}>
                <ul>
                  <li>
                    <input
                      type="radio"
                      data-index="0"
                      className="shipping_method"
                      checked="checked"
                    ></input>
                    Free Shipping
                  </li>
                  <li>Local Delivery</li>
                  <li>Local Pickup</li>
                  <li>Shipping to Vietnam.</li>
                  <li>Change address</li>
                </ul>
              </div>
              <div className={styles['cart-info']}>$ 16.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
