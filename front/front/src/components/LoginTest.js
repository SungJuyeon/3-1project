
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function LoginTest() {
  const [loginId, setLoginId] = useState('');
  const [pw, setPw] = useState('');

  //db 데이터
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/test');
    // 여기서 response.data가 배열인지 객체인지 확인 후 처리
    if (Array.isArray(response.data)) {
      setEntities(response.data);
    } else {
      // 만약 객체 형태로 받아왔을 경우, 적절히 처리
      // 예: 배열로 변환하여 처리
      setEntities([response.data]);
    }
  } catch (error) {
    console.error('데이터 불러오기 에러:', error);
  }
};


const onSubmit = async (e) => {
  e.preventDefault();
  console.log('전송할 데이터:', { loginId, pw });
  try {
    const response = await axios.post('http://localhost:8080/test', {
      loginId: loginId,
      pw: pw,
    });
    console.log('데이터 전달 성공: ', response.data);
    fetchData(); // 데이터 다시 불러오기
  } catch (error) {
    if (error.response) {
      // 서버에서 응답을 받았지만 오류 상태 코드가 있는 경우
      console.error('데이터 전달 에러:', error.response.status, error.response.data);
      // 여기서 적절한 오류 처리를 추가할 수 있습니다.
    } else if (error.request) {
      // 서버로 요청을 보냈지만 응답을 받지 못한 경우
      console.error('데이터 전달 에러:', error.request);
    } else {
      // 요청을 설정하는 과정에서 오류가 발생한 경우
      console.error('데이터 전달 에러:', error.message);
    }
  }
};


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
        아 이 디 : <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)}></input>
        </div>
        <div>
        비 밀 번 호 :<input type="text" value={pw} onChange={(e) => setPw(e.target.value)}></input>
        </div>
        <button type="submit">전송</button>
      </form>

      <div>
        <h2>TestEntity DB</h2>
        <ul>
        {entities.map((entity, index) => (
    <li key={`${entity.loginId}-${index}`}>
      아이디: {entity.loginId} / 비밀번호: {entity.pw}
    </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginTest;