import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={`${styles.item} ${styles['item-active]}`}>
        <Link to="./">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">Furniture</Link>
      </li>
      <li className={styles.item}>
        <Link to="./coffee-table">Coffee tables</Link>
      </li>
      <li className={styles.item}>
        <Link to="./sofas">Sofas</Link>
      </li>
      <li className={styles.item}>
        <Link to="./bedroom">Bedroom furniture</Link>
      </li>
      <li className={styles.item}>
        <Link to="./contact-us">contact us</Link>
      </li>
    </ul>
  );
}
export default Navigation;
