import React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { IRegisterInfo } from '../data/types';

import { text, URL } from '../data';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IRegisterInfo>();
  
  const onSubmit: SubmitHandler<IRegisterInfo> = async (data: IRegisterInfo) => {
    try {
      const response = await axios.post(`http://localhost:8000/register/`, data);
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.register.success);
        navigate(URL.main);
      }
    } catch (err) {
      alert(text.register.error);
    } finally {
      console.log(data);
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Form.Check
          type="radio"
          value="true"
          label="학생"
          defaultChecked={true}
          {...register("isstudent")}
        />
        <Form.Check // prettier-ignore
          type="radio"
          value="false"
          label="교수자"
          {...register("isstudent")}
        />
      </div>
      <Form.Group className="mb-3">
        <Form.Label>ID (3자 이상 32자 이하의 영문 및 숫자)</Form.Label>
        <Form.Control type='text' {...register("id")}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>비밀번호 (8자 이상의 영문 및 숫자)</Form.Label>
        <Form.Control type='password' {...register("pw")}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>이름</Form.Label>
        <Form.Control type='text' {...register("name")}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>학번</Form.Label>
        <Form.Control type='text' {...register("stid")} onChange={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}></Form.Control>
      </Form.Group>
      <Button type='submit'>회원가입</Button>
    </Form>
  );
}

export default RegisterForm;