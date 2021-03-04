import React, { useState, useRef, useEffect } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers());
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect');
    for (let i=0; i < winNumbers.length - 1; i++) { // 비동기 함수에 변수쓸 때 let 사용하면 클로저 문제 안생김
      timeouts.current[i] = setTimeout(() => { // current 배열의 요소로 넣기 때문에 상태가 바뀌는게 아님
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); // 빈배열 - componentDidMount
  // 배열에 요소가 있다면 Mount, Update 둘 다 수행

  const onClickRedo = () => {
    console.log('onClickRedo');
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <div>당첨숫자</div> 
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더</button>}
    </>
  );
}

export default Lotto;