import React from 'react';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/cartSlice.js';

import CustomButton from '../../custom-button/index';

function ProductItems(props) {
  const dispatch = useDispatch();
  const { id, sale, name, price, imageUrl } = props.item;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        itemId: id,
        price,
        imageUrl,
        name,
      })
    );
  };
  return (
    <div key={id} className={styles.item}>
      <div className={styles.image}>
        <img src={imageUrl} alt="" />
        <div className={styles.note}>
          <CustomButton
            text={`ADD TO CART`}
            className={styles.button}
            icon={<ion-icon name="cart"></ion-icon>}
            onClick={addToCartHandler}
          />
          <div className={styles['icon-box']}>
            <CustomButton className={styles.icon} icon={<ion-icon name="heart"></ion-icon>} />
            <CustomButton className={styles.icon} icon={<ion-icon name="shuffle"></ion-icon>} />
            <CustomButton className={styles.icon} icon={<ion-icon name="eye"></ion-icon>} />
          </div>
        </div>
        {sale && <span className={styles.sale}>Sales!</span>}
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>$ {price}.00</p>
      </div>
    </div>
  );
}
export default ProductItems;
