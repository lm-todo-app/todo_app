import React from 'react';
import './App.css';
import Landing from './Landing.js'
import Home from './Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/home' component={Home}></Route>
    </Router>
  );
}

export default App;
