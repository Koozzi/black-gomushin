import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import GlobalStyle from './components/common/globalStyle';
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
      <BrowserRouter>
        {isLogin ? loginRouter : serviceRouter}
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};
export default App;
