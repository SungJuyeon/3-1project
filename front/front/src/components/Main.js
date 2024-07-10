
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Join from './Join';
import LoginNav from './LoginNav';
import UserInfo from './UserInfo';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/api/login" element={<LoginNav />} />
        <Route path="/join" element={<Join />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;