import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../../components/page';
import Article from '../../components/article';

import { IUserInfo } from '../../data/types';

interface ArticleProps {
  userInfo?: IUserInfo;
};

const ArticlePage: React.FC<ArticleProps> = ({ userInfo }) => {
  const { id } = useParams();
  return (
    <Page>
        <Article id={Number(id)} />
      </Page>
  );
}

export default ArticlePage;
