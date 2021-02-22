import React, { Component } from 'react';

function getNumbers() { // 숫자 4개 랜덤으로 뽑음

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {

  };

  onChangeInput = (e) => {
    
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} type="text"/>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v) => {
            return (
              <li>{v}</li>
            );
          });}
        </ul>
      </>
    );
  }
}