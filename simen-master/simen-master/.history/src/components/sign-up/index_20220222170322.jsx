import React from 'react';
import styles from './styles.module.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/index';

function SignUp() {
  return (
    <div className={styles['sign-up']}>
      <h2 className={styles.title}>I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <FormInput type="text" name="displayName" label="Display Name" required />
        <FormInput type="email" name="email" label="Email" required />
        <FormInput type="password" name="password" label="Password" required />
        <FormInput type="password" name="confirmPassword" label="Confirm Password" required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
export default SignUp;
