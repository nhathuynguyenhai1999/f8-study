import React from 'react';
import styles from './styles.module.scss';

function Navigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          Home
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          Furniture
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          Coffee tables
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          Sofass
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          Bedroom furniture
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.text} href="/#">
          contact us
        </a>
      </li>
    </ul>
  );
}
export default Navigation;
