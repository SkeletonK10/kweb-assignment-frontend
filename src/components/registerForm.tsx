import React from 'react';
import styled from '@emotion/styled';

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
  return (
    <RegisterFormStyle>
      <div style={{margin: "10px"}}>
        <input type="radio" name="isStudent" value="true" defaultChecked={true} />학생
        <input type="radio" name="isStudent" value="false" />교수자
      </div>
      <div>ID</div>
      <InputBox id='id' type='text'></InputBox>
      <div>비밀번호</div>
      <InputBox id='pw' type='password'></InputBox>
      <div>이름</div>
      <InputBox id='name' type='text'></InputBox>
      <div>학번</div>
      <InputBox id='stID' type='text' onChange={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '');}}></InputBox>
      <div>
        <SubmitButton type='submit' value='회원가입' />
      </div>
    </RegisterFormStyle>
  );
}

export default RegisterForm;