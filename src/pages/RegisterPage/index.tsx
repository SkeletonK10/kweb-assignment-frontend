import React from 'react';

import Page from '../../components/page';
import RegisterForm from '../../components/registerForm';

const RegisterPage: React.FC = () => {
  return (
    <Page>
      <h1>회원가입</h1>
      <RegisterForm />
    </Page>
  );
}

export default RegisterPage;