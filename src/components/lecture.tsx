import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ILectureInfo, ISimpleArticleInfo, IUserInfo } from '../data/types';

import { text, URL } from '../data';

interface LectureProps {
  id: number;
  userInfo: IUserInfo;
}

const Lecture: React.FC<LectureProps> = ({ id, userInfo }) => {
  const [lectureInfo, setLectureInfo] = useState<ILectureInfo>();
  const navigate = useNavigate();
  const getLectureInfo = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token === undefined)
        return;
      const response = await axios.get(`http://localhost:8000/lecture/${id}`, { headers: { authorization: token } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setLectureInfo(response.data);
    } catch (err) {
      alert(text.lecture.error);
      console.log(err);
      window.location.reload();
    }
  }
  
  useEffect(() => {
    getLectureInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const articles = lectureInfo ? lectureInfo.articles.map((article: ISimpleArticleInfo, index: number) => {
    return (
      <div key={index}>
        <div>{article.title}</div>
        <div>{article.createdat}</div>
      </div>
    );
  }) : (<>{text.lecture.noArticle}</>);
  return (
    lectureInfo ?
      <>
        <div>
          <h1>{lectureInfo.name}</h1>
          {lectureInfo.professorid === userInfo.id ? <button onClick={() => { navigate(URL.writeArticle) }}>글쓰기</button> : <></>}
        </div>
        {lectureInfo.professor}
        {articles}
        <button onClick={() => window.history.back()}>뒤로</button>
      </>
      :
      <></>
    
  );
}

export default Lecture;