import { Input } from 'antd';
import React from 'react';
import CustomButton from '../../components/custom-button/index';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/cartSlice.js';

function ShopItems() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className={styles.table}>
      <Row className={styles.container}>
        <Col span={2} className={`${styles.remove} ${styles.head}`}>
          &nbsp;
        </Col>
        <Col span={4} className={`${styles.thumbnail} ${styles.head}`}>
          &nbsp;
        </Col>
        <Col span={6} className={`${styles.name} ${styles.head}`}>
          Product
        </Col>
        <Col span={4} className={`${styles.price} ${styles.head}`}>
          Price
        </Col>
        <Col span={4} className={`${styles.quantity} ${styles.head}`}>
          Quantity
        </Col>
        <Col span={4} className={`${styles.subtotal} ${styles.head}`}>
          Total
        </Col>
      </Row>
      <Row className={styles.container}>
        {items.map((item) => (
          <>
            <Col span={2} className={styles.remove}>
              <ion-icon name="close-circle"></ion-icon>
            </Col>
            <Col span={4} className={styles.thumbnail}>
              <img src={item.imageUrl} alt="" />
            </Col>
            <Col span={6} className={styles.name}>
              {item.name}
            </Col>
            <Col span={4} className={styles.price}>
              $ {item.price}.00
            </Col>
            <Col span={4} className={styles.quantity}>
              <input
                type="number"
                className="input-text qty text"
                step="1"
                min="0"
                max=""
                value={item.quantity}
                title="Qty"
                inputmode="numeric"
              />
            </Col>
            <Col span={4} className={styles.subtotal}>
              $ {item.totalPrice}.00
            </Col>
          </>
        ))}
      </Row>
      <Row>
        <Col span={24} className={styles.actions}>
          <div className={styles.coupon}>
            <Input className={styles.input} placeholder="Coupon code" />
            <CustomButton className={styles.button} text="Apply coupon" />
          </div>
          <CustomButton className={styles.button} text="update cart" />
        </Col>
      </Row>
    </div>
  );
}
export default ShopItems;
