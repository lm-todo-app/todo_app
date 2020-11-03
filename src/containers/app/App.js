import React from 'react'
import './App.css';

import ProtectedRoute from '../../components/ProtectedRoute.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Login from '../login/Login.js'
import Signup from '../signup/Signup.js'
import Home from '../home/Home.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path='/' component={Home}></ProtectedRoute>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route path='*'>
            <Redirect to={'/login'} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
