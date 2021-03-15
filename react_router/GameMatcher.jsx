import React, { Component } from 'react';
import WordRelay from '../WordRelay/WordRelayClass';
import Lotto from '../lecture/LottoClass';

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <WordRelay />
        <Lotto />
      </>
    );
  }
}

export default GameMatcher;