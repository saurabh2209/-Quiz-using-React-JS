var React=require('react')
var ReactDOM=require('react-dom')
var {Route, Router, hashHistory}=require('react-router')
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
