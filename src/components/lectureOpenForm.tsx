import React from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ILectureOpenInfo } from '../data/types';

import { text, URL } from '../data';

const LectureOpenForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILectureOpenInfo>();
  
  const onSubmit: SubmitHandler<ILectureOpenInfo> = async (data: ILectureOpenInfo) => {
    try {
      const response = await axios.post(`http://localhost:8000/lecture/`, data, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
      }
      else {
        alert(text.lectureOpen.success);
        navigate(URL.lobby);
      }
    } catch (err) {
      alert(text.lectureOpen.error);
    } finally {
      console.log(data);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>강의 이름을 입력하세요.</div>
      <input type='text' {...register("name")}></input>
      <input type='submit' value='개설' />
    </form>
  );
}

export default LectureOpenForm;