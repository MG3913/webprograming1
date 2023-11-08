import React, { useState } from 'react';

function Js() {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const showReversePlanning = () => {
    setSelectedScreen('reversePlanning');
  }

  const showPlanning = () => {
    setSelectedScreen('planning');
  }

  return (
    <main>
      <h2>모바일 프로그래밍</h2>
      <ul>
        <li>
          아래는 자바로 모바일 환경에서 구현한 간단한 계산기 앱이다.
        </li>
        <li>
          5개의 간단한 기능을 구현하였고, 소숫점 단위도 계산 가능하다.
        </li>
        <li>
          <button onClick={showReversePlanning}>숨기기</button>
          <button onClick={showPlanning}>앱 작동 예시 보기</button>
        </li>
        {selectedScreen === 'reversePlanning' && (
          <li> </li>
        )}
        {selectedScreen === 'planning' && (
          <ul>
            <li> <img className="CCC1" style={{ width: '200px', height: '300px' }} alt="" src="/img/CCC1.png" /></li>
            <li> <img className="CCC2" style={{ width: '200px', height: '300px' }} alt="" src="/img/CCC2.png" /></li>
            <li> <img className="CCC3" style={{ width: '200px', height: '300px' }} alt="" src="/img/CCC3.png" /></li>
            <li> <img className="CCC4" style={{ width: '200px', height: '300px' }} alt="" src="/img/CCC4.png" /></li>
          </ul>
        )}
      </ul>
    </main>
  );
}

export default Js;
