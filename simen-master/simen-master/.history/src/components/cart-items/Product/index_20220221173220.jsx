import React from 'react';
import styles from './styles.module.scss';
import ProductItems from '../ProductItems/index';

function Product({ itemsFilter }) {
  return (
    <>
      <div className={styles.container}>
        {itemsFilter.map((item) => (
          <ProductItems key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
export default Product;
