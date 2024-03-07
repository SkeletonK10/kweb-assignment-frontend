import React from 'react';

import Page from '../../components/page';
import LoginForm from '../../components/loginForm';

const MainPage: React.FC = () => {
  return (
    <Page>
      <h1>로그인</h1>
      <LoginForm />
    </Page>
  );
}

export default MainPage;