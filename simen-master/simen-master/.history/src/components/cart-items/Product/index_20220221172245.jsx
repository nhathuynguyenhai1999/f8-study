import React from 'react';
import styles from './styles.module.scss';
import items from './data.js';
import ProductItems from '../ProductItems/index';

function Product({ itemsFilter }) {
  return (
    <>
      <div className={styles.container}></div>
      {itemsFilter.map((item) => (
        <ProductItems item={item} />
      ))}
    </>
  );
}
export default Product;
