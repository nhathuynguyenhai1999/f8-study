import React from 'react';
import styles from './styles.module.scss';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import items from './data.js';

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
              <p className={styles.sub}>contact@simen.com</p>
              <p className={styles.sub}>info@simen.com</p>
            </div>
          </div>
        </Col>
        {items.map((item) => (
          <Col span={4} key={item.id}>
            <h4 className={styles.title}>{item.title}</h4>
            <div className={styles.text}>
              <div className={styles['text-box']}>
                {item.sub.map((sub) => (
                  <p className={styles.sub} key={sub.id}>
                    {sub.text}
                  </p>
                ))}
              </div>
            </div>
          </Col>
        ))}
        <Col span={6}>
          <h4 className={styles.title}>Register</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <p className={styles.sub}>Register your email for news</p>
            </div>
            <div className={styles['text-box']}></div>
            <div className={styles['text-box']}></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
