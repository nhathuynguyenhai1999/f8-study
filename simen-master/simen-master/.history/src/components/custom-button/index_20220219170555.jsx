import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';

function CustomButton({ text, classButton }) {
  const classes = `${styles.button} ${classButton}`;

  return (
    <Button className={classes} type="primary">
      {text}
    </Button>
  );
}
export default CustomButton;
