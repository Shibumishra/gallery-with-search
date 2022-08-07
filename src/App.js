import React from 'react';
import './App.css';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import Container from './components/Container';
import Nav from './components/Nav';

const App = () => (
  
  <HashRouter>
    <div className="container">
      <Route component={Nav} />
      <Switch>
        <Route exact path='/' render={ () => <Redirect to={"/search"} /> } />
        <Route exact path="/search" component={Container} />
        <Route path="/search/:query" component={Container} />
      </Switch> 
    </div>
  </HashRouter>
)

export default App;