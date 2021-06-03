import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

import Home from './containers/Home';
import Mypage from './containers/Mypage';
import TIL from './containers/TIL';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mypage" exact component={Mypage} />
      <Route path="/til" exact component={TIL} />
    </Switch>
  );
}

export default App;
