import React from 'react';
import styles from './styles.module.scss';
import items from './data.js';

function Furniture() {
  return (
    <>
      <h1>Furniture</h1>
      {items.map((item) => (
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={item.imageUrl} alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>$ {item.price}.00</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Furniture;
