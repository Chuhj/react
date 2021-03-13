import React from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import WordRelay from '../WordRelay/WordRelayClass';
import Lotto from '../lecture/LottoClass';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/word-relay">끝말잇기</Link>
        &nbsp;
        <Link to="/lotto-generator">로또</Link>
      </div>
      <div>
        <Route path="/word-relay" component={WordRelay} />
        <Route path="/lotto-generator" component={Lotto} />
      </div>
    </BrowserRouter>
  );
};

export default Games;