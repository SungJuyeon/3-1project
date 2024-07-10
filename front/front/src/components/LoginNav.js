import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import hide from "../image/hide.png";
import view from "../image/view.png";

function LoginNav() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const changeId = (e) => {
    setLoginId(e.target.value);
  };

  const changePw = (e) => {
    setPassword(e.target.value);
  };

  const pwVisible = () => {
    setShowPw(!showPw);
  };

  const validateForm = () => {
    if (!loginId || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const clearError = () => {
    setError("");
  };

  const submitLogin = async (e) => {
    e.preventDefault(); // 기본 제출 동작 방지

    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post("/login", null, {
        params: {
          loginId: loginId,
          password: password,
        },
        withCredentials: true // 쿠키 정보를 요청에 포함
      });
      if (response.data.status === "loginFail") {
        alert("아이디 또는 비밀번호가 맞지 않습니다.");
      } else if (response.data.status === "success") {
        const sessionId = response.data.sessionId;
        console.log("세션 ID:", sessionId);
        document.cookie = `sessionId=${sessionId}; path=/`;
        console.log("쿠키에 저장된 세션 ID:", document.cookie);
        alert("로그인 성공");
        navigate("/home");
      }

    } catch (error) {
      console.error("로그인 실패: ", error);
      if (error.response.status === 403) {
        alert("로그인 실패: 인증 실패");
      } else {
        alert("아이디 또는 비밀번호가 맞지 않습니다.");
      }
    }
  };

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={submitLogin} className='login_form'>
        <div className="id">
          <div>
            <input 
              type="text" 
              name="loginId"
              className="loginId"
              placeholder="아이디" 
              value={loginId}
              onChange={changeId}
              onFocus={clearError} // 입력 시 에러 메시지 초기화
            />
          </div>
        </div>
        <div>
          <div>
            <input 
              type={showPw ? "text" : "password"} 
              name="password"
              className="password" 
              placeholder="비밀번호" 
              value={password}
              onChange={changePw}
              onFocus={clearError}
            />
            <div className="pw_visible" onClick={pwVisible}>
              <img src={showPw ? hide : view} width={20} height={20} alt="보이기"></img>
            </div>
          </div>
          {error && <div className="error_message">{error}</div>} {/* 에러 메시지 표시 */}
        </div>
        <button type="submit" className="login"> 
          <div>로그인</div>
        </button>
      </form>
      <div className='login_join'>
        <Link to="/join" className='join_link'>
          <button>회원가입</button>
        </Link>
        <Link to="/findId" className='findId_link'>
          아이디 찾기
        </Link>
        <Link to="/findPw" className='findPw_link'>
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}

export default LoginNav;
