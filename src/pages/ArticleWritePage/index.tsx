import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Page from '../../components/page';
import ArticleWriteBox from '../../components/articleWriteBox';

import { text } from '../../data';
import { IUserInfo } from '../../data/types';

interface ArticleProps {
  userInfo?: IUserInfo;
};

const ArticleWritePage: React.FC<ArticleProps> = ({ userInfo }) => {
  const { id } = useParams();
  const [lectureName, setLectureName] = useState<string>('');
  
  const getLectureName = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/lecture/${id}`, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      if (userInfo === undefined || response.data.professorid !== userInfo.id) {
        alert(text.articleWrite.forbidden);
        window.history.back();
      }
      setLectureName(response.data.name);
      console.log(response.data);
    } catch (err) {
      alert(text.articleWrite.lectureNameError);
      console.log(err);
      window.location.reload();
    }
  }
  
  useEffect(() => {
    getLectureName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    userInfo ?
      <Page>
        <h1>{lectureName} 게시글 작성</h1>
        <ArticleWriteBox id={Number(id)} userInfo={userInfo} />
      </Page>
      :
      <></>
  );
}

export default ArticleWritePage;