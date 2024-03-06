import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { text, URL } from '../data';

const Header = styled.div`
  width: 100vw;
  height: 50px;
  
  border-bottom: 2px solid black;
  
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  height: 100%;
  
  margin-left: 20px;
  
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1.3rem;
`;

const PageHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderTitle onClick={() => navigate(URL.main)}>
        {text.main.title}
      </HeaderTitle>
    </Header>
  );
}

export default PageHeader;