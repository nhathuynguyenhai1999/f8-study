import React from 'react';
import styles from './styles.module.scss';

import { data } from './data.js';
function Header() {
  return (
    <div className="main">
      <img
        src="http://demo.snstheme.com/wp/simen/wp-content/themes/snssimen/assets/img/logo.png"
        alt="Logo"
      />
      {data.map((item) => (
        <div key={item.id}>
          <ion-icon name={item.icon}></ion-icon>
          <p>{item.title}</p>
          <span>{item.sub}</span>
        </div>
      ))}
    </div>
  );
}
export default Header;
