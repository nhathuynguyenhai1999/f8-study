import React from 'react';
import styles from './styles.module.scss';

import ShopItems from '../../components/shop-items/index';

import { Input } from 'antd';
import CustomButton from '../../components/custom-button/index';

function ShoppingCart() {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <ShopItems />
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
                  <li>
                    <input type="radio" data-index="0" className="shipping_method"></input>
                    Local Delivery
                  </li>
                  <li>
                    <input type="radio" data-index="0" className="shipping_method"></input>
                    Local Pickup
                  </li>
                  <li>Shipping to Vietnam.</li>
                  <li>Change address</li>
                </ul>
              </div>
              <div className={styles['cart-info']}>$ 16.00</div>
            </div>
          </div>
          <div className={styles['cart-button']}>
            <CustomButton text="PROCEED TO CHECKOUT" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
