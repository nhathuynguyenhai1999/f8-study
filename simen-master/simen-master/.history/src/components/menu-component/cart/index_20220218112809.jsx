import React from 'react';
import styles from './styles.module.scss';

function Cart() {
  return (
    <div>
      <ion-icon name="cart-outline"></ion-icon>
      <span>0</span>
      <span>(items)</span>
    </div>
  );
}
export default Cart;
