import React from 'react';
import styles from './styles.module.scss';
import Navigation from '../navigation/index';

function Menu() {
  return (
    <div className={styles.main}>
      <Navigation />
      <p>Search</p>
      <p>Cart</p>
    </div>
  );
}
export default Menu;
