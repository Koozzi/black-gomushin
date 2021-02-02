import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginView from './pages/LoginView';

const App = () => {
  const isLogin = true;
  const loginRouter = (
    <>
      <Route path="/login" component={LoginView} />
      <Redirect from="*" to="/login" />
    </>
  );

  const serviceRouter = (
    <>
      <Switch>
        <Route path="">hello</Route>
      </Switch>
    </>
  );

  return (
    <>
      <BrowserRouter>{isLogin ? loginRouter : serviceRouter}</BrowserRouter>
    </>
  );
};
export default App;
