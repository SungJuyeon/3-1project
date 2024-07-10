
import axios from 'axios';
import React, { useState } from 'react';

function Join() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    loginId:'',
    pw: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.loginId || !user.pw) {
      alert("필수 항목을 입력하지 않았습니다.");
      return;
    }

    try {
      await axios.post('/join', user);
      alert('회원가입 완료');
      window.location.href = '/';
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data);
      } else {
        console.log('회원가입 에러: ' + error);
      }
    }
  };

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" value={user.name} placeholder="이름" onChange={handleChange} />
        <input type="text" id="loginId" value={user.loginId} placeholder="아이디" onChange={handleChange} />
        <input type="password" id="pw" value={user.pw} placeholder="비밀번호" onChange={handleChange} />
        <input type="text" id="email" value={user.email} placeholder="이메일" onChange={handleChange} />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Join;
