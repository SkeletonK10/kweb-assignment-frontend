import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginNeedRoute from './components/LoginNeedRoute';
import LobbyPage from './pages/LobbyPage';

import { text, URL } from './data';
import { IUserInfo } from './data/types';

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token === undefined)
        return;
      const response = await axios.get(`http://localhost:8000/user/`, { headers: { authorization: token } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setUserInfo(response.data);
    } catch (err) {
      alert(text.page.error);
      console.log(err);
      window.location.reload();
    }
  }
  
  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
        <Routes>
          <Route path={URL.main} element={<MainPage />} />
        <Route path={URL.register} element={<RegisterPage />} />
        <Route element={<LoginNeedRoute />}>
          <Route path={URL.lobby} element={<LobbyPage userInfo={userInfo} />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
