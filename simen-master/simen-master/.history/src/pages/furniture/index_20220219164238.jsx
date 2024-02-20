import React from 'react';
import styles from './styles.module.scss';
import items from './data.js';

function Furniture() {
  return (
    <>
      <h1>Furniture</h1>
      {items.map((item) => (
        <div>
          <div></div>
        </div>
      ))}
    </>
  );
}
export default Furniture;
