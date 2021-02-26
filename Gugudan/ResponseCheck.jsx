import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  timeout;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
      }, Math.floor(Math.random() * 1000) + 2000);
    }
    else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(this.timeout);
    }
    else if (state === 'now') { // 반응속도 체크
      this.setState({
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [],
      })
    }
  }

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