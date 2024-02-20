import React from 'react';
import styles from './styles.module.scss';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <div className={styles.footer}>
      <Row className={styles['footer-box']}>
        <Col span={6}>
          <h4 className={styles.title}>Contact us</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <ion-icon name="home"></ion-icon>
              <p className={styles.sub}>8888 South Avenue Street, New York</p>
            </div>
            <div className={styles['text-box']}>
              <ion-icon name="call"></ion-icon>
              <p className={styles.sub}>(12) 3 456 7896</p>
              <p className={styles.sub}>(12) 3 456 7895</p>
            </div>
            <div className={styles['text-box']}>
              <ion-icon name="home"></ion-icon>
              <p className={styles.sub}>8888 South Avenue Street, New York</p>
              <p className={styles.sub}>8888 South Avenue Street, New York</p>
            </div>
          </div>
        </Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={6}>col-8</Col>
      </Row>
    </div>
  );
}
export default Footer;
