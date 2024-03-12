import React from 'react';
import { useNavigate } from 'react-router-dom';

import Page from '../../components/page';
import TakingList from '../../components/takingList';

import { URL } from '../../data';
import { IUserInfo } from '../../data/types';

interface LobbyInfo {
  userInfo?: IUserInfo;
}

const LobbyPage: React.FC<LobbyInfo> = ({ userInfo }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

  return (
    userInfo ?
      <Page>
        환영합니다, {userInfo.name}님!<br />
        당신은 {userInfo.isstudent ? "학생" : "교수자"}입니다.
        {userInfo.isstudent ? <></> : <button onClick={() => navigate(URL.lectureOpen)}>강의 개설</button>}
        <button onClick={handleLogout}>로그아웃</button>
          <TakingList isstudent={userInfo.isstudent} />
      </Page>
      :
      <></>
  );
}

export default LobbyPage;
