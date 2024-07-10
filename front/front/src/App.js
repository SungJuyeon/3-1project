
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Join from './components/Join';
import LoginNav from './components/LoginNav';
import UserInfo from './components/UserInfo';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginNav />} />
          <Route path="/join" element={<Join />} />
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
