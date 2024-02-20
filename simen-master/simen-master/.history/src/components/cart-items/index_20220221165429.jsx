import React from 'react';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import addItemToCart from '../../redux/cartSlice.js';
import removeItemFromCart from '../../redux/cartSlice.js';

import CustomButton from '../custom-button/index';

function CartItems({ itemsFilter }) {
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
      <div className={styles.container}>
        {itemsFilter.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img src={item.imageUrl} alt="" />
              <div className={styles.note}>
                <CustomButton
                  text={`ADD TO CART`}
                  className={styles.button}
                  icon={<ion-icon name="cart"></ion-icon>}
                  onClick={(item) => addToCartHandler}
                />
                <div className={styles['icon-box']}>
                  <CustomButton className={styles.icon} icon={<ion-icon name="heart"></ion-icon>} />
                  <CustomButton
                    className={styles.icon}
                    icon={<ion-icon name="shuffle"></ion-icon>}
                  />
                  <CustomButton className={styles.icon} icon={<ion-icon name="eye"></ion-icon>} />
                </div>
              </div>
              {item.sale && <span className={styles.sale}>Sales!</span>}
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>$ {item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default CartItems;
