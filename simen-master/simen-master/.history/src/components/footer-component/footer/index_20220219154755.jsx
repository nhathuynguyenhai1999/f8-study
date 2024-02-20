import React from 'react';
import styles from './styles.module.scss';

import 'antd/dist/antd.css';
import { Row, Col, Input } from 'antd';

import CustomButton from '../../custom-button/index';

import items from './data.js';

function Footer() {
  return (
    <div className={styles.footer}>
      <Row className={styles['footer-box']}>
        <Col span={6} className={`${styles.col} ${styles['col-6']}`}>
          <h4 className={styles.title}>Contact us</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <div className={styles.icon}>
                <ion-icon name="home"></ion-icon>
              </div>
              <p className={styles.sub}>
                8888 South Avenue <br /> Street, New York
              </p>
            </div>
            <div className={styles['text-box']}>
              <div className={styles.icon}>
                <ion-icon name="call"></ion-icon>
              </div>
              <div className={styles['text-sub']}>
                <p className={styles.sub}>(12) 3 456 7896</p>
                <p className={styles.sub}>(12) 3 456 7895</p>
              </div>
            </div>
            <div className={styles['text-box']}>
              <div className={styles.icon}>
                <ion-icon name="mail"></ion-icon>
              </div>
              <div className={styles['text-sub']}>
                <p className={`${styles.sub} ${styles['sub--active']}`}>contact@simen.com</p>
                <p className={`${styles.sub} ${styles['sub--active']}`}>info@simen.com</p>
              </div>
            </div>
          </div>
        </Col>
        {items.map((item) => (
          <Col span={4} key={item.id} className={styles.col}>
            <h4 className={styles.title}>{item.title}</h4>
            <ul className={styles.list}>
              <li className={styles.item}>
                {item.sub.map((sub) => (
                  <a href="/#" className={styles.link} key={sub.id}>
                    {sub.text}
                  </a>
                ))}
              </li>
            </ul>
          </Col>
        ))}
        <Col span={6} className={`${styles.col} ${styles['col-6']}`}>
          <h4 className={styles.title}>Register</h4>
          <div className={styles.text}>
            <div className={styles['text-box']}>
              <p className={styles.sub}>Register your email for news</p>
            </div>
            <div className={styles['text-box']}>
              <Input className={styles.input} placeholder="Your email here" />
            </div>
            <div className={styles['text-box']}>
              <CustomButton text={'Subscribe'} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
