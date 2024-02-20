import { Input } from 'antd';
import React from 'react';
import CustomButton from '../custom-button/index';
import styles from './styles.module.scss';

function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <div className={styles.buttons}>
          <CustomButton text="sign in" />
          <CustomButton text="Sign In with Google" />
        </div>
      </form>
    </div>
  );
}
export default SignIn;
