import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { URL } from '../data';

const LoginFormStyle = styled.form`
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.input`
  width: 200px;
  
  margin: 10px;
`;

const SubmitButton = styled.input`
  width: 70px;
  margin: 20px;
`;

const RegisterButton = styled.button`
  width: 70px;
  margin: 20px;
`;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <LoginFormStyle>
      <div>ID</div>
      <InputBox id='id' type='text'></InputBox>
      <div>PW</div>
      <InputBox id='pw' type='password'></InputBox>
      <div>
        <SubmitButton type='submit' value='로그인' />
        <RegisterButton type='button' onClick={() => {navigate(URL.register)}}>회원가입</RegisterButton>
      </div>
    </LoginFormStyle>
  );
}

export default LoginForm;