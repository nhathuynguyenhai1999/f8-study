import React from 'react';
import styles from './styles.module.scss';

function Menu() {
  return (
    <div className={styles.main}>
      <Nav />
      <p>Search</p>
      <p>Cart</p>
    </div>
  );
}
export default Menu;
