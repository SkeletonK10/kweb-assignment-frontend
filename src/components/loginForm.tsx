import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from '@emotion/styled';

import { ILoginInfo } from '../data/types';

import { text, URL } from '../data';

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
  const { register, handleSubmit } = useForm<ILoginInfo>();
  
  const onSubmit: SubmitHandler<ILoginInfo> = async (data: ILoginInfo) => {
    try {
      const response = await axios.post(`http://localhost:8000/login/`, data);
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.login.success);
        localStorage.setItem('accessToken', response.data.token);
        navigate(URL.lobby);
        window.location.reload();
      }
    } catch (err) {
      alert(text.login.error);
    } finally {
      console.log(data);
    }
  }
  
  return (
    <LoginFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div>ID</div>
      <InputBox type='text' {...register("id")}></InputBox>
      <div>PW</div>
      <InputBox type='password' {...register("pw")}></InputBox>
      <div>
        <SubmitButton type='submit' value='로그인' />
        <RegisterButton type='button' onClick={() => {navigate(URL.register)}}>회원가입</RegisterButton>
      </div>
    </LoginFormStyle>
  );
}

export default LoginForm;