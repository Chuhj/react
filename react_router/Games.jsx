import React from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

import GameMatcher from './GameMatcher'

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/word-relay">끝말잇기</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또</Link>
        &nbsp;
        <Link to="/game/index">게임매쳐</Link>
      </div>
      <div>
        <Route path="/game/:name" component={GameMatcher} />
      </div>
    </BrowserRouter>
  );
};

export default Games;