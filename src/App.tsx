import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import Tag from 'views/Tag';



function App() {
  return (
    <Router>
      <Switch>
        {/* 默认路由 */}
        <Redirect exact from="/" to="statistics"></Redirect>
        {/* <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:id">
          <Tag />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route> */}
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        {/* 404 */}
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
