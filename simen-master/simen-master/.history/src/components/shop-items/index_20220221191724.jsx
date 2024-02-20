import { Input } from 'antd';
import React from 'react';
import CustomButton from '../../components/custom-button/index';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

function ShopItems() {
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <Row>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={2}>
          col-6
        </Col>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={2}>
          col-6
        </Col>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={4}>
          col-6
        </Col>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={2}>
          col-6
        </Col>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={3}>
          col-6
        </Col>
        <Col style={{ backgroundColor: 'rgba(255,255,255)' }} span={2}>
          col-6
        </Col>
      </Row>
      {items.map((item) => (
        <div className={styles.table}>
          <div className={styles.container}>
            <div className={`${styles.remove} ${styles.head}`}>&nbsp;</div>
            <div className={styles.remove}>
              <a href="/#">
                <ion-icon name="close-circle"></ion-icon>
              </a>
            </div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.thumbnail} ${styles.head}`}>&nbsp;</div>
            <div className={styles.thumbnail}>
              <img src={item.imageUrl} alt="" />
            </div>
            ));
          </div>
          <div className={styles.container}>
            <div className={`${styles.name} ${styles.head}`}>Product</div>
            <div className={styles.name}>{item.name}</div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.price} ${styles.head}`}>Price</div>
            <div className={styles.price}>$ {item.price}.00</div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.quantity} ${styles.head}`}>Quantity</div>
            <div className={styles.quantity}>
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
            </div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.subtotal} ${styles.head}`}>Total</div>
            <div className={styles.subtotal}>$ {item.totalPrice}.00</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.coupon}>
              <Input className={styles.input} placeholder="Coupon code" />
              <CustomButton className={styles.button} text="Apply coupon" />
            </div>
            <CustomButton className={styles.button} text="update cart" />
          </div>
        </div>
      ))}
    </>
  );
}
export default ShopItems;
