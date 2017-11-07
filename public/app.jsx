import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory} from 'react-router'
import Quiz from 'Quiz'
import Main from 'Main'

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}/>
  <Route path="/assessment" component={Quiz}/>
  </Router>
  ,
  document.getElementById('app')
  );
