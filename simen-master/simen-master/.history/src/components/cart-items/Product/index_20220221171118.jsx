import React from 'react';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import addItemToCart from '../../redux/cartSlice.js';
import removeItemFromCart from '../../redux/cartSlice.js';

import ProductItems from '../ProductItems/index';
import CustomButton from '../custom-button/index';

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
    </>
  );
}
export default Product;
