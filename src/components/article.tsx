import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

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
      <>
        <h1>{articleInfo.title}</h1>
        {articleInfo.createdat}
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(articleInfo.content)}}></div>
      </>
      :
      <></>
    
  );
}

export default Article;