import React from 'react';
import styles from '../../components/cart-items/ProductItems';
import items from '../../components/cart-items/data.js';

import Product from '../../components/cart-items/Product/index';

function Bedroom() {
  const itemsFilter = items.filter((item) => item.bedroom === true);
  return (
    <>
      <div className={styles['total-item']}>{itemsFilter.length} items</div>
      <Product itemsFilter={itemsFilter} />
    </>
  );
}

export default Bedroom;
