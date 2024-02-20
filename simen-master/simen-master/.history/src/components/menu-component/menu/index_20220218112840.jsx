import React from 'react';
import styles from './styles.module.scss';
import Navigation from '../navigation/index';
import Cart from '../cart/index';

function Menu() {
  return (
    <div className={styles.main}>
      <Navigation />
      <p style={{ width: '100px', textAlign: 'center' }}>Search</p>
      <Cart />
    </div>
  );
}
export default Menu;
