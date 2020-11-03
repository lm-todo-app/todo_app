import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from '../landing/Landing.js'
import Home from '../home/Home.js'


// const handleLogin = e => {
//     e.preventDefault();
//     setUser(true);
// }

const App = () => {
  const [user, setUser] = useState(false);

  if (user) {
    return (
    <Router>
      <Route exact path='/home' component={Home}></Route>
      <Redirect to='/home' />
    </Router>
    );
  }

  return (
    <Router>
      <Route exact path='/' component={Landing}></Route>
      <Redirect to='/' />
    </Router>
  )
}

export default App;
