import React from 'react';
import styles from '../../components/cart-items/styles.module.scss';
import items from '../../components/cart-items/data.js';

import CartItems from '../../components/cart-items';

function Bedroom() {
  const itemsFilter = items.filter((item) => item.bedroom === true);
  return (
    <>
      <div className={styles['total-item']}>{itemsFilter.length} items</div>
      <CartItems itemsFilter={itemsFilter} />
    </>
  );
}

export default Bedroom;
