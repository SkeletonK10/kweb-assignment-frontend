import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

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
  
  const articles = lectureInfo?.articles.length !== 0 ? lectureInfo?.articles.map((article: ISimpleArticleInfo, index: number) => {
    return (
      <Card style={{ width: "100%", margin: "20px", padding: "10px" }} key={index} onClick={() => navigate(`${URL.article}${article.id}`)}>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle>{article.createdat}</Card.Subtitle>
      </Card>
    );
  }) : (
    <Card style={{ width: "100%", margin: "20px", padding: "10px" }}>
      <Card.Title>{text.lecture.noArticle}</Card.Title>
    </Card>);
  return (
    lectureInfo ?
      <>
        <h1>{lectureInfo.name}</h1>
        {lectureInfo.professorid === userInfo.id ? <Button onClick={() => { navigate(`${URL.articleWrite}${id}`) }}>글쓰기</Button> : <></>}
        {lectureInfo.professor}
        {articles}
        <Button variant="secondary" onClick={() => window.history.back()}>뒤로</Button>
      </>
      :
      <></>
    
  );
}

export default Lecture;