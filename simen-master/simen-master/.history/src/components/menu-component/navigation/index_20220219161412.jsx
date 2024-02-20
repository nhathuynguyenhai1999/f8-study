import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="./">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">Furniture</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">Coffee tables</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">Sofas</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">Bedroom furniture</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture">contact us</Link>
      </li>
    </ul>
  );
}
export default Navigation;
