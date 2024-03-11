import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import ReactQuill from 'react-quill';

import { IArticleWriteInfo, IUserInfo } from '../data/types';

import { text, URL } from '../data';


interface ArticleWriteBoxProps {
  id: number;
  userInfo: IUserInfo;
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "underline"],
    ],
  },
};

const ArticleWriteBox: React.FC<ArticleWriteBoxProps> = ({ id, userInfo }) => {
  const navigate = useNavigate();
  const { register, setValue, handleSubmit } = useForm<IArticleWriteInfo>();
  const onSubmit: SubmitHandler<IArticleWriteInfo> = async (data: IArticleWriteInfo) => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token === undefined)
        return;
      const response = await axios.post(`http://localhost:8000/article/${id}`, data, { headers: { authorization: token } });
      if (response.data.code) {
        alert(response.data.msg);
        navigate(`${URL.lecture}${id}`);
      }
      else {
        alert(text.articleWrite.success);
        navigate(`${URL.lecture}${id}`);
      }
    } catch (err) {
      alert(text.articleWrite.error);
      console.log(err);
      navigate(URL.lobby);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('title')} placeholder='제목을 입력하세요'></input>
      <ReactQuill modules={modules} onChange={(value) => setValue('content', value)} />
      <input type='submit' value='작성' />
    </form>
  );
}

export default ArticleWriteBox;