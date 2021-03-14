import React, { Component } from 'react';

class GameMatcher extends Component {
  render() {
    console.log(this.props.history, this.props.match);
    return (
      <div>게임매쳐</div>
    );
  }
}

export default GameMatcher;