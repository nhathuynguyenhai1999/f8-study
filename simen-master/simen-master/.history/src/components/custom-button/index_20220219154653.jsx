import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';

function CustomButton({ text }) {
  return (
    <Button className={styles.button} type="primary">
      {text}
    </Button>
  );
}
export default CustomButton;
