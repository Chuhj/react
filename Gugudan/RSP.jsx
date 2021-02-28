import React, { Component } from 'react';

const rspCoord = {
  가위: '-142px',
  바위: '0',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  componentDidMount() { // 컴포넌트가 첫 렌더링 된 후, 비동기 요청
    this.interval = setInterval(() => {
      const { imgCoord } = this.state; // 비동기 함수가 바깥 변수를 참조하면 클로저 발생

      if (imgCoord === rspCoord.바위) {
        console.log(imgCoord);
        this.setState({
          imgCoord: rspCoord.가위,
        });
      }
      else if (imgCoord === rspCoord.가위) {
        this.setState({
          imgCoord: rspCoord.보,
        });
      }
      else if (imgCoord === rspCoord.보) {
        this.setState({
          imgCoord: rspCoord.바위,
        });
      }
    }, 1000);
  };

  componentDidUpdate() { // 리렌더링 후

  };

  componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리
    clearInterval(this.interval);
  };

  onClickBtn = (choice) => {

  };

  render() {
    const { result, score, imgCoord } = this.state;
    return(
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;