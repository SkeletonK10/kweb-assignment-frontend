import React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from '@emotion/styled';

import { IRegisterInfo } from '../data/types';

import { text } from '../data';

const RegisterFormStyle = styled.form`
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

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IRegisterInfo>();
  
  const onSubmit: SubmitHandler<IRegisterInfo> = async (data: IRegisterInfo) => {
    try {
      const response = await axios.post(`localhost:8000/register/`, data);
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.register.success);
        window.location.reload();
      }
    } catch (err) {
      alert(text.register.error);
    } finally {
      console.log(data);
    }
  }
  return (
    <RegisterFormStyle onSubmit={handleSubmit(onSubmit)}>
      <div style={{margin: "10px"}}>
        <input type="radio" {...register("isStudent")} value="true" defaultChecked={true} />학생
        <input type="radio" {...register("isStudent")} value="false" />교수자
      </div>
      <div>ID</div>
      <InputBox type='text' {...register("id")}></InputBox>
      <div>비밀번호</div>
      <InputBox type='password' {...register("pw")}></InputBox>
      <div>이름</div>
      <InputBox type='text' {...register("name")}></InputBox>
      <div>학번</div>
      <InputBox type='text' {...register("stID")} onChange={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '');}}></InputBox>
      <div>
        <SubmitButton type='submit' value='회원가입' />
      </div>
    </RegisterFormStyle>
  );
}

export default RegisterForm;