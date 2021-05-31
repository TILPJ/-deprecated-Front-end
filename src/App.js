import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  );
}

export default App;
