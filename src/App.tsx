import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { Home, Login } from './pages';
import { AppState } from './shared';
import { connect, ConnectedProps } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = ({ loginState }: AppState) => ({
  isAuthenticated: loginState.isAuthenticated
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export const App = ({ isAuthenticated }: PropsFromRedux): React.ReactElement => {
  let routes = (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  );

  if (isAuthenticated) {
    routes = (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
  return routes;
};

export default connector(App);
