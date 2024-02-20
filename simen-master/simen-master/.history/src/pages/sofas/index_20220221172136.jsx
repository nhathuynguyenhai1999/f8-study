import React from 'react';
import styles from '../../components/cart-items/ProductItems/styles.module.scss';
import items from '../../components/cart-items/Product/data.js';

import Product from '../../components/cart-items/Product/index';

function Sofas() {
  const itemsFilter = items.filter((item) => item.sofas === true);

  return (
    <>
      <div className={styles['total-item']}>{itemsFilter.length} items</div>
      <Product itemsFilter={itemsFilter} />
    </>
  );
}

export default Sofas;
