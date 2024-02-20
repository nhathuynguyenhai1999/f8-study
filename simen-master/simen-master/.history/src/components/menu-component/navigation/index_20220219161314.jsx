import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.text}>Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture" className={styles.text}>
          Furniture
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture" className={styles.text}>
          Coffee tables
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture" className={styles.text}>
          Sofas
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture" className={styles.text}>
          Bedroom furniture
        </Link>
      </li>
      <li className={styles.item}>
        <Link to="./furniture" className={styles.text}>
          contact us
        </Link>
      </li>
    </ul>
  );
}
export default Navigation;
