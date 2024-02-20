import React from 'react';
import styles from './styles.module.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/index';

function SignUp() {
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={this.handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
export default SignUp;
