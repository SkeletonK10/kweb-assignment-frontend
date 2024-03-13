import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ILoginInfo } from '../data/types';

import { text, URL } from '../data';
import { Button, Form } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="md-3">
        <Form.Label>ID</Form.Label>
        <Form.Control type='text' {...register("id")}></Form.Control>
      </Form.Group>
      <Form.Group className="md-3">
        <Form.Label>PW</Form.Label>
        <Form.Control type='password' {...register("pw")}></Form.Control>
      </Form.Group>
      <Button type='submit'>로그인</Button>
      <Button type='button' onClick={() => {navigate(URL.register)}}>회원가입</Button>
    </Form>
  );
}

export default LoginForm;