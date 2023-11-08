import React, { useState } from 'react';

function NodeJs () {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const showReversePlanning = () => {
    setSelectedScreen('reversePlanning');
  }

  const showPlanning = () => {
    setSelectedScreen('planning');
  }

  const downloadReport = () => {
    
    const reportFileUrl = '/img/report.docx';
    window.location.href = reportFileUrl;
  }

  return (
    <main>
      <h2>C++</h2>
      <ul>
        <li>
        아래는 C++로 구현한 간단한 계산기 앱이다
        </li>
        <li>
        <button onClick={showReversePlanning}>숨기기</button>
      <button onClick={showPlanning}>프로젝트 보고서 보기</button>
        </li>
        {selectedScreen === 'reversePlanning' && (
        <li> </li>
      )}
      {selectedScreen === 'planning' && (
        <ul>
        <li> 3명이서 함께 참여했던 간단한 프로젝트의 보고서 입니다. </li>
        <li> <button onClick={downloadReport}>보고서 다운로드</button></li>
        </ul>
      )}
      </ul>
    </main>
  );
};

export default NodeJs;
