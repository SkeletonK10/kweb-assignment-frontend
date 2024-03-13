import React from 'react';
import styled from '@emotion/styled';

import Header from './header';

import { IUserInfo } from '../data/types';

const PageStyle = styled.div`
  width: 800px;
  
  margin: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface PageProps {
  userInfo?: IUserInfo;
  children: React.ReactNode
};

const Page: React.FC<PageProps> = ({ userInfo, children }) => {
  return (
    <PageStyle>
      <Header userInfo={userInfo} />
      {children}
    </PageStyle>
  );
}

export default Page;