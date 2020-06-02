import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login, Home } from './pages';
import { GlobalContext, getInitialGlobalContext, withAuthentication } from './shared';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components';

const App = (): React.ReactElement => {
  return (
    <GlobalContext.Provider value={getInitialGlobalContext()}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={withAuthentication(Home)} />
        <Redirect to="/" />
      </Switch>
    </GlobalContext.Provider>
  );
};

export default App;
