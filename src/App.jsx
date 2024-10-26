import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Layout/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
