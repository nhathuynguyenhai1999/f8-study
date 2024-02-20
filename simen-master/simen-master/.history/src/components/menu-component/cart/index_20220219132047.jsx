import React from 'react';
import styles from './styles.module.scss';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles['cart-box']}>
        <div className={styles['cart-icon-box']}>
          <ion-icon name="cart"></ion-icon>
        </div>
        <span className={styles['cart-text']}>0</span>
        <span>( items )</span>
      </div>
      <div class={styles.content}>
        <div class="block-inner">
          <div class="widget woocommerce widget_shopping_cart">
            <div class="widget_shopping_cart_content">
              <ul class="cart_list products-list product_list_widget ">
                <li class="empty">No products in the cart.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
