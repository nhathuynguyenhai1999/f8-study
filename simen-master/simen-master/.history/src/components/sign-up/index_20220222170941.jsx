import React from 'react';
import styles from './styles.module.scss';

import CustomButton from '../custom-button/index';
import { Input } from 'antd';

function SignUp() {
  return (
    <div className={styles['sign-up']}>
      <h2 className={styles.title}>I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className={styles.form}>
        <Input type="text" name="displayName" placeholder="Display Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />
        <Input type="password" name="confirmPassword" placeholder="Confirm Password" required />
        <CustomButton text="sign up" />
      </form>
    </div>
  );
}
export default SignUp;
