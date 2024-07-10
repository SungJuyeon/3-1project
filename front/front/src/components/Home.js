
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  
  const useData = location.state && location.state.useData;
  const email = useData ? useData.email : ''
  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      alert('로그아웃 완료');
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  const goToUserPage = () => {
    window.location.href = '/userInfo';
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      {email ? (
        <>
          <p>이메일: {email}</p>
          <button onClick={handleLogout}>로그아웃</button>
          <button onClick={goToUserPage}>마이 페이지</button>
        </>
      ) : (
        <p>사용자 정보를 불러오는 중...</p>
      )}
    </div>
  );
}

export default Home;
