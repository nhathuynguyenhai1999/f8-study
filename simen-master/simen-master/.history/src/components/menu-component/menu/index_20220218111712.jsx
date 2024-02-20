import React from 'react';
import styles from './styles.module.scss';
import Navigation from '../navigation/index';

function Menu() {
  return (
    <div className={styles.main}>
      <Navigation />
      <p style={{ width: '200px' }}>Search</p>
      <p style={{ width: '40px' }}>Cart</p>
    </div>
  );
}
export default Menu;
