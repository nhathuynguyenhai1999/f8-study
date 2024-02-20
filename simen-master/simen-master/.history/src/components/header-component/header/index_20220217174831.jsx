import React from 'react';
import styles from './styles.module.scss';

import { data } from './data.js';
function Header() {
  return (
    <div>
      <img src="../../../assets/img/logo.png" alt="Logo" />
      {data.map(item => (
        <div>
          {item.icon}
          <p>{item.title}</p>
          <span>{item.</span>
        </div>
      ))}
    </div>
  );
}
export default Header;
