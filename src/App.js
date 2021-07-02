/* eslint-disable */

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '전기 자동차 추천']);
  let [value, valueState] = useState(0);

  let posts = '강남 고기 맛집';

  function 제목변경(){
    var newArray = [...글제목]; //글제목에 있던 0번째 데이터를 여자 코트 추천으로 바꿈
    if (글제목[0] === '남자 코트 추천') {
      newArray[0] = '여자 코트 추천';
    } else {
      newArray[0] = '남자 코트 추천';  
    }
    글제목변경( newArray ); //state를 아예 대체해주는 함수
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style= { { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <div className="list">
      <h3>{ 글제목[0] } <span onClick={()=>{ 
        // value += 1;
        // valueState(value);
        valueState(value + 1);
      }}>👍</span> { value } </h3>
      <p>2월 17일 발행</p>
      <button onClick = { 제목변경 }> 변경 버튼 </button>
      <hr/>
      <h3>{ 글제목[1] }</h3>
      <p>2월 18일 발행</p>
      <hr/>
      <h3>{ 글제목[2] }</h3>
      <p>2월 19일 발행</p>
      <hr/>
      </div>
    </div>
  );
}

export default App;
