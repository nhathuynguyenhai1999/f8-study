import React from 'react';
import styles from '../../components/cart-items/ProductItems/styles.module.scss';
import items from '../data.js';

import Product from '../../components/cart-items/Product/index';

function Furniture() {
  const itemsFilter = items.filter((item) => item.furniture === true);
  return (
    <>
      <div className={styles['total-item']}>{itemsFilter.length} items</div>
      <Product itemsFilter={itemsFilter} />
    </>
  );
}
export default Furniture;
