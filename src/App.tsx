import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginNeedRoute from './components/LoginNeedRoute';
import LobbyPage from './pages/LobbyPage';
import ArticlePage from './pages/ArticlePage';
import LecturePage from './pages/LecturePage';
import ArticleWritePage from './pages/ArticleWritePage';
import LectureOpenPage from './pages/LectureOpenPage';
import LectureListPage from './pages/LectureListPage';

import { text, URL } from './data';
import { IUserInfo } from './data/types';

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const getUserInfo = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (token === null)
        return;
      const response = await axios.get(`http://localhost:8000/user/`, { headers: { authorization: token } });
      if (response.data.code) {
        alert(response.data.msg);
        window.location.reload();
      }
      setUserInfo(response.data);
    } catch (err) {
      alert(text.page.error);
      localStorage.removeItem('accessToken');
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
          <Route path={`${URL.lecture}:id/`} element={<LecturePage userInfo={userInfo} />} />
          <Route path={`${URL.article}:id/`} element={<ArticlePage userInfo={userInfo} />} />
          <Route path={`${URL.articleWrite}:id/`} element={<ArticleWritePage userInfo={userInfo} />} />
          <Route path={`${URL.lectureOpen}`} element={<LectureOpenPage userInfo={userInfo} />} />
          <Route path={`${URL.lectureList}`} element={<LectureListPage userInfo={userInfo} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
