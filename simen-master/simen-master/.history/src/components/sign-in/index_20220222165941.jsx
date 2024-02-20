import React from 'react';
import styles from './styles.module.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/index';

function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={this.state.email}
          label="email"
          handleChange={this.handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={this.state.password}
          label="password"
          onChange={this.handleChange}
        />
        <div className={styles.buttons}>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
