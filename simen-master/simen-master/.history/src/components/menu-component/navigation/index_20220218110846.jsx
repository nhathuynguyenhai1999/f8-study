import React from 'react';
import styles from './styles.module.scss';

function Navigation() {
  return (
    <ul className={styles.container}>
      <li>
        <a href="/#">Home</a>
      </li>
      <li>
        <a href="/#">Furniture</a>
      </li>
      <li>
        <a href="/#">Coffee tables</a>
      </li>
      <li>
        <a href="/#">Sofas</a>
      </li>
      <li>
        <a href="/#">Bedroom furniture</a>
      </li>
      <li>
        <a href="/#">shop</a>
      </li>
      <li>
        <a href="/#">blog</a>
      </li>
      <li>
        <a href="/#">shortcodes</a>
      </li>
      <li>
        <a href="/#">contact us</a>
      </li>
    </ul>
  );
}
export default Navigation;
