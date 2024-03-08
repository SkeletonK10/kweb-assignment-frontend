import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { URL } from './data';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginNeedRoute from './components/LoginNeedRoute';
import LobbyPage from './pages/LobbyPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={URL.main} element={<MainPage />} />
        <Route path={URL.register} element={<RegisterPage />} />
        <Route element={<LoginNeedRoute />}>
          <Route path={URL.lobby} element={<LobbyPage />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
