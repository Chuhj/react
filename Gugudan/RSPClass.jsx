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

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoord).find(function(v) {
    return v[1] === imgCoord;
  })[0];
}

class RSP extends Component {
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  };

  interval;

  componentDidMount() { // 컴포넌트가 첫 렌더링 된 후, 비동기 요청
    this.interval = setInterval(this.changeHand, 100);
  };

  componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리
    clearInterval(this.interval);
  };

  changeHand = () => {
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
  }

  onClickBtn = (choice) => () => {
    const { imgCoord } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다',
      });
    }
    else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다',
          score: prevState.score + 1,
        };
      });
    }
    else {
      this.setState((prevState) => {
        return {
          result: '졌습니다',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 2000);
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return(
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;