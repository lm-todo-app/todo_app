import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Login from '../components/Login.js'
import { Link } from 'react-router-dom';
import CreateAccount from '../components/CreateAccount.js'

function Landing() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <h1 style={{'font-size':'200px'}}>Todo.</h1>
        <h3>Sign In</h3>
        <Grid item xs={3}>
          <Login />
          {/* <CreateAccount /> */}
        </Grid>
        <p>Don't have an account? Create one now.</p>
        <Link to="/home">Click me</Link>
        </Grid>
    </div>
  );
}

export default Landing;
