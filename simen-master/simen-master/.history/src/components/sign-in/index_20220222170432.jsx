import React from 'react';
import styles from './styles.module.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/index';

function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className={styles.buttons}>
          <CustomButton text="sign in" />
          <CustomButton text="Sign In with Google" />
        </div>
      </form>
    </div>
  );
}
export default SignIn;
