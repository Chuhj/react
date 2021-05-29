import React from 'react';
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom';

import GameMatcher from './GameMatcher'

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/word-relay?a=1234&name=chu">끝말잇기</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또</Link>
        &nbsp;
        <Link to="/game/index">게임매쳐</Link>
      </div>
      <div>
        <Switch>
          <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/word-relay" render={(props) => <GameMatcher {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  //<Route path="/game/:name" component={GameMatcher} />
  // props를 전달할 경우 render 사용
};

export default Games;