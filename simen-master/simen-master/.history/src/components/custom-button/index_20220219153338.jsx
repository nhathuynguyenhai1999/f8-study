import React from 'react';
import styles from './styles.module.scss';

function CustomButton() {
  return (
    <Button className={styles.button} type="primary">
      Subscribe
    </Button>
  );
}
export default CustomButton;
