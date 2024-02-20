import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../custom-button/index';
import { Input } from 'antd';

function SignUp() {
  return (
    <div className={styles['sign-up']}>
      <h2 className={styles.title}>I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <FormInput type="text" name="displayName" label="Display Name" required />
        <FormInput type="email" name="email" label="Email" required />
        <FormInput type="password" name="password" label="Password" required />
        <FormInput type="password" name="confirmPassword" label="Confirm Password" required />
        <CustomButton text="sign up" />
      </form>
    </div>
  );
}
export default SignUp;
