import React from 'react';
import styles from './styles.module.scss';
import Navigation from '../navigation/index';

function Menu() {
  return (
    <div className={styles.main}>
      <Navigation />
      <p style={{ width: '100px', textAlign: 'center' }}>Search</p>
      <p style={{ width: '140px', textAlign: 'center' }}>Cart</p>
    </div>
  );
}
export default Menu;
