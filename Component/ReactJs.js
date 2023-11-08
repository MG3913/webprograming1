import React, { useState } from 'react';

function ReactJs  () {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const showReversePlanning = () => {
    setSelectedScreen('reversePlanning');
  }

  const showPlanning = () => {
    setSelectedScreen('planning');
  }

  return (

    <main>
      <h2>웹 프로그래밍</h2>
      <ul>
        <li>아래는 간단한 js와 css를 같이 사용한 HTML 문서이다.</li>
        <li>나만의 웹문서를 작성해 보았다. 다만 모듈화가 되어있지 않아 코드는 난잡하다.</li>
        <li>
        <button onClick={showReversePlanning}>숨기기</button>
      <button onClick={showPlanning}>웹문서 보기</button>
        </li>
        {selectedScreen === 'reversePlanning' && (
        <li></li>
      )}
      {selectedScreen === 'planning' && (
        <div className="c1image"> <img className="wp" alt="" src="/img/wp.png" /></div>
      )}
      </ul>
    </main>
  );
};

export default ReactJs;
