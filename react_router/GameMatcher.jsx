import React, { Component } from 'react';
import WordRelay from '../WordRelay/WordRelayClass';
import Lotto from '../lecture/LottoClass';

class GameMatcher extends Component {
  render() {
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('a'));
    console.log(this.props.location.search.slice(2));
    if (this.props.match.params.name === 'word-relay') {
      return <WordRelay />
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />
    }
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

export default GameMatcher;