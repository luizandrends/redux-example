import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Techs from './pages/Techs';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Techs} />
    </Switch>
  );
}
