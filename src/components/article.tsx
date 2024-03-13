import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Card } from 'react-bootstrap';

import { IArticleInfo } from '../data/types';

import { text } from '../data';

interface ArticleProps {
  id: number;
}

const Article: React.FC<ArticleProps> = ({ id }) => {
  const [articleInfo, setArticleInfo] = useState<IArticleInfo>();
  const getArticleInfo = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token === undefined)
        return;
      const response = await axios.get(`http://localhost:8000/article/${id}`, { headers: { authorization: token } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setArticleInfo(response.data);
    } catch (err) {
      alert(text.article.error);
      console.log(err);
      window.location.reload();
    }
  }
  
  useEffect(() => {
    getArticleInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    articleInfo ?
      <Card style={{ width: "100%" }}>
        <Card.Header>
          <Card.Title>{articleInfo.title}</Card.Title>
          <Card.Subtitle>{articleInfo.createdat}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(articleInfo.content)}} />
        </Card.Body>
      </Card>
      :
      <></>
  );
}

export default Article;