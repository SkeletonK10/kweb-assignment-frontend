import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { URL } from './data';

import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={URL.main} element={<MainPage />} />
          <Route path={URL.register} element={<RegisterPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
