import React from 'react';
import styles from './styles.module.scss';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <div className={styles.footer}>
      <Row className={styles['footer-box']}>
        <Col span={6}></Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={4}>col-6</Col>
        <Col span={6}>col-8</Col>
      </Row>
    </div>
  );
}
export default Footer;
