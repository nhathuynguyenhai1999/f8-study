import React from 'react';
import styles from './styles.module.scss';

import SignIn from '../../components/sign-in/index';
import SignUp from '../../components/sign-up/index';

function Login() {
  return (
    <div className={styles.container}>
      <SignIn />
      <SignUp />
    </div>
  );
}
export default Login;
