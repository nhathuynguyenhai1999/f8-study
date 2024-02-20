import React from 'react';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

import CustomButton from '../../custom-button/index';

function Cart() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
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
              {items.length === 0 ? (
                <li className={styles['item-empty']}>No products in the cart</li>
              ) : (
                ''
              )}
              {items.length > 0
                ? items.map((item) => (
                    <li className={styles.item}>
                      <div className={styles['item-img']}>
                        <img src={item.imageUrl} alt="" />
                      </div>
                      <div className={styles['item-price']}>
                        <p>{item.name}</p>
                        <span>
                          {item.quantity} x $ {item.price}.00
                        </span>
                      </div>
                      <a href="/" className={styles['item-delete']}>
                        <ion-icon name="close-circle"></ion-icon>
                      </a>
                    </li>
                  ))
                : ''}
            </ul>
            {items.length > 0 ? (
              <div className={styles.total}>
                <span>Total:</span>
                <span className={styles['total-price']}>${totalAmount}.00</span>
              </div>
            ) : (
              ''
            )}
            {items.length > 0 ? (
              <div className={styles['button-box']}>
                <CustomButton className={styles.button} text="Go to cart" />
                <CustomButton className={styles.button} text="Checkout" />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
