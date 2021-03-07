import React, { useRef, useState } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요');

      timeout.current = setTimeout(() => {
        startTime.current = new Date();
        setState('now');
        setMessage('지금 클릭');
      }, Math.floor(Math.random() * 1000) + 2000);
    }
    else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('빨리누름');
    }
    else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const renderAverage = () => {
    return (
      result.length === 0
          ? null
          : <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
    );
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );

}

class ResponseCheck extends Component {
  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.startTime = new Date();
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
      }, Math.floor(Math.random() * 1000) + 2000);
    }
    else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '빨리누름',
      })
    }
    else if (state === 'now') { // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요',
          result: [...prevState.result, this.endTime - this.startTime],
        };                                   
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return (
      result.length === 0
          ? null
          : <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
    );
  }
  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;