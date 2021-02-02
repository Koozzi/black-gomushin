import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {
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
      <BrowserRouter>{loginRouter}</BrowserRouter>
    </>
  );
}
export default App;
