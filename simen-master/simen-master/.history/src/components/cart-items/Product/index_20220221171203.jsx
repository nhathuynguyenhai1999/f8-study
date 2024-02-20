import React from 'react';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import items from './data.js';
import ProductItems from '../ProductItems/index';
import CustomButton from '../custom-button/index';

import addItemToCart from '../../redux/cartSlice.js';
import removeItemFromCart from '../../redux/cartSlice.js';

function Product({ itemsFilter }) {
  const dispatch = useDispatch();

  const addToCartHandler = ({ id, name, price, imageUrl }) => {
    dispatch(
      addItemToCart({
        id,
        name,
        price,
        imageUrl,
      })
    );
    console.log('add');
  };

  return (
    <>
      <div className={styles.container}></div>
      <ProductItems />
    </>
  );
}
export default Product;
