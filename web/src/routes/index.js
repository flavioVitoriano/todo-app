import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import NewTodo from '../pages/NewTodo';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/profile"  component={Profile} />
        <Route path="/register"  component={Register} />
        <Route path="/todo/new"  component={NewTodo} />

      </Switch>
    </BrowserRouter>
  );
}