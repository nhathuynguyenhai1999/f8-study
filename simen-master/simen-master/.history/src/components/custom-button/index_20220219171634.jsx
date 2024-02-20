import React from 'react';
import styles from './styles.module.scss';
import { Button } from 'antd';

function CustomButton({ text, className, icon }) {
  const classes = `${styles.button} ${className}`;

  return (
    <Button className={classes} type="primary">
      {icon}
      {text}
    </Button>
  );
}
export default CustomButton;
