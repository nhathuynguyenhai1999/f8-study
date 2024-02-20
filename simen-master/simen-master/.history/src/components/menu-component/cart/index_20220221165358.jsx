import React from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

import CustomButton from '../../custom-button/index';

function Cart() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className={styles.cart}>
      <div className={styles['cart-box']}>
        <div className={styles['cart-icon-box']}>
          <ion-icon name="cart"></ion-icon>
        </div>
        <span className={styles['cart-text']}>{cartQuantity}</span>
        <span>( items )</span>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.content}>
          <div className={styles.container}>
            <ul className={styles.list}>
              <li className={styles['item-empty']}>No products in the cart</li>
              {false && (
                <li className={styles.item}>
                  <div className={styles['item-img']}>
                    <img
                      src="//demo.snstheme.com/wp/simen/wp-content/uploads/2015/11/10-215x260.jpg"
                      alt=""
                    />
                  </div>
                  <div className={styles['item-price']}>
                    <p>Modular Modern</p>
                    <span>1 x $ 2.00</span>
                  </div>
                  <div className={styles['item-delete']}>
                    <ion-icon name="close-circle"></ion-icon>
                  </div>
                </li>
              )}
            </ul>
            {false && (
              <div className={styles.total}>
                <span>Total:</span>
                <span className={styles['total-price']}>$16.00</span>
              </div>
            )}
            {false && (
              <div className={styles['button-box']}>
                <CustomButton className={styles.button} text="Go to cart" />
                <CustomButton className={styles.button} text="Checkout" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
