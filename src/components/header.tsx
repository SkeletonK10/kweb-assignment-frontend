import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { text, URL } from '../data';
import { IUserInfo } from '../data/types';

const Header = styled.div`
  width: 100vw;
  height: 50px;
  
  border-bottom: 2px solid black;
  margin-bottom: 20px;
  
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

const UserInfoStyle = styled.div`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;

interface HeaderProps {
  userInfo?: IUserInfo;
}

const PageHeader: React.FC<HeaderProps> = ({ userInfo }) => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderTitle onClick={() => { navigate(userInfo ? URL.lobby : URL.main) }}>
      {text.main.title}
      </HeaderTitle>
      {
        userInfo ? 
          <UserInfoStyle onClick={() => { navigate(URL.lobby) }}>
            {userInfo.name}
          </UserInfoStyle>
          :
          <></>
      }
    </Header>
  );
}

export default PageHeader;