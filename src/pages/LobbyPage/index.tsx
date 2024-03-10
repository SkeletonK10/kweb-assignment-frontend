import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Page from '../../components/page';
import TakingList from '../../components/takingList';

import { text } from '../../data';

interface IUserInfo {
  name: string;
  isstudent: boolean;
};

const LobbyPage: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const getUserInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/`, { headers: { authorization: localStorage.getItem('accessToken') } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setUserInfo(response.data);
    } catch (err) {
      alert(text.lobby.error);
      console.log(err);
      window.location.reload();
    }
  }
  
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }
  
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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