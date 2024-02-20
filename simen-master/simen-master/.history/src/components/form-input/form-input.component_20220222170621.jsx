import React from 'react';
import styles from './styles.module.scss;

const FormInput = () => (
  <div className="group">
    <input className="form-input" />
    <label className={styles['form-input-label']}></label>
  </div>
);

export default FormInput;
