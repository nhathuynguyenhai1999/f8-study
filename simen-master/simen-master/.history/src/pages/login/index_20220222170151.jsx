import React from 'react';
import styles from './styles.module.scss';

import { Form, Input, Button, Checkbox } from 'antd';

function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <SignIn />
      <SignUp />
    </div>
  );
}
export default Login;
