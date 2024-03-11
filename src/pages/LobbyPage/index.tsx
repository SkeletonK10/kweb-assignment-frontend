import React from 'react';

import Page from '../../components/page';
import TakingList from '../../components/takingList';

import { IUserInfo } from '../../data/types';

interface LobbyInfo {
  userInfo?: IUserInfo;
}

const LobbyPage: React.FC<LobbyInfo> = ({ userInfo }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

  return (
    userInfo ?
    <Page>
      환영합니다, {userInfo.name}님!<br />
      당신은 {userInfo.isstudent ? "학생" : "교수자"}입니다.
      <button onClick={handleLogout}>로그아웃</button>
        <TakingList isstudent={userInfo.isstudent} />
    </Page>
      :
      <></>
  );
}

export default LobbyPage;