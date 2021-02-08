import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import GlobalStyle from './components/common/globalStyle';
import LoginView from './pages/LoginView';
import MainView from './pages/MainView';
import { useSelector } from 'react-redux';

const App = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const loginRouter = (
    <>
      <Route path="/login" component={LoginView} />
      <Redirect from="*" to="/login" />
    </>
  );

  const serviceRouter = (
    <>
      <Switch>
        <Route path="/" component={MainView} />
      </Switch>
    </>
  );

  return (
    <>
      <BrowserRouter>
        <StylesProvider injectFirst>{isLogin ? serviceRouter : loginRouter}</StylesProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};
export default App;
