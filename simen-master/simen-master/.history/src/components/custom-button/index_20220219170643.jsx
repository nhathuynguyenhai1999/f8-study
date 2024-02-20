import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';

function CustomButton({ text, className }) {
  const classes = `${styles.button} ${className}`;

  return (
    <Button className={classes} type="primary">
      {text}
    </Button>
  );
}
export default CustomButton;
