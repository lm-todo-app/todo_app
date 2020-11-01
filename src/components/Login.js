import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios'
import { FormControl } from '@material-ui/core';
import { withRouter } from 'react-router-dom'

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      username:'',
      password:'',
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    axios.post('http://localhost:5000/login',
      {
        'email': this.state.email,
        'password': this.state.password,
      }
    ).then((response) => {
      this.props.history.push("/home")
    }, (error) => {
      this.setState({open: true})
      console.log(error.response.data.data);
    });
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false})
  };
  render() {
    return (
      <Box>
        <FormControl>
          <label>Email: </label>
          <TextField
            value={this.state.email}
            name='email'
            onChange = {this.handleChange}
          />
          <br />
          <label>Password: </label>
          <TextField
            type="password"
            value={this.state.password}
            name='password'
            onChange = {this.handleChange}
          />
          <Button
            label="Submit"
            style={style}
            onClick={(event) => this.handleClick(event)}>
            Submit
          </Button>
        </FormControl>

        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}>
          <Alert
            onClose={this.handleClose}
            severity="error">
            Login Failed!
          </Alert>
        </Snackbar>
      </Box>
    );
  }
}

const style = {
  margin: 15,
};

export default withRouter(Login);
