import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Home', url: '/home' },
  { id: 2, name: 'Furniture', url: '/furniture' },
  { id: 3, name: 'Coffee tables', url: '/coffee-table' },
  { id: 4, name: 'Sofas', url: '/sofas' },
  { id: 5, name: 'Bedroom furniture', url: '/bedroom' },
  { id: 6, name: 'Contact us', url: '/contact-us' },
];

function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const [activeItem, setActiveItem] = useState(-1);

  const activeHandler = (itemId) => {
    setIsActive(true);
    console.log(itemId);
  };
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li
          onClick={() => activeHandler(item.id)}
          className={`${styles.item} ${isActive ? styles.active : ''}`}
        >
          <Link to={item.url} key={item.id}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Navigation;
