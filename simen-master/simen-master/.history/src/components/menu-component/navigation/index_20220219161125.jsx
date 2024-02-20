import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          Home
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          Furniture
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          Coffee tables
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          Sofass
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          Bedroom furniture
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.text} href="/#">
          contact us
        </Link>
      </li>
    </ul>
  );
}
export default Navigation;
