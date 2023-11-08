import React, { useState } from 'react';

function Css() {
  
  const [selectedScreen, setSelectedScreen] = useState(null);

  const showReversePlanning = () => {
    setSelectedScreen('reversePlanning');
  }

  const showPlanning = () => {
    setSelectedScreen('planning');
  }

  return (
    <main>
      <h2>디지털 컨텐츠 기획</h2>
      <button onClick={showReversePlanning}>역기획서 보기</button>
      <button onClick={showPlanning}>기획서 보기</button>
      {selectedScreen === 'reversePlanning' && (
        <ul>
          <li>역기획서</li>
          <li>아래의 역기획서는 모바일 게임 '매직 앤 서바이버' 에 관한 역기획서이다.</li>
          <li> <img className="RP" alt="" src="/img/RP.png" /></li>
          <li> 기존에 존재하는 컨텐츠의 ui, 시스템, 장단점등을 분석하였다.</li>
        </ul>
      )}
      {selectedScreen === 'planning' && (
        <ul>
          <li>기획서</li>
          <li>아래의 기획서는 기존의 보드게임 '뱅' 을 모바일 및 온라인 플랫폼으로 이식하는 것에 관한 기획서이다.</li>
          <li> <img className="P" alt="" src="/img/P.png" /></li>
        </ul>
      )}
    </main>
  );
}

export default Css;
