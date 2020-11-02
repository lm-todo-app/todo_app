import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios'
import { FormControl } from '@material-ui/core';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state={
      email:'',
      username:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    console.log(this.state)
    axios.post('http://localhost:5000/users',
      {
        'username': this.state.username,
        'email': this.state.email,
        'password': this.state.password,
      }
    ).then((response) => {
      console.log(response.response);
    }, (error) => {
      console.log(error.response.data.data);
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
          <label>Username: </label>
          <TextField
            value={this.state.username}
            name='username'
            onChange = {this.handleChange}
          />
          <label>Password: </label>
          <TextField
            type="password"
            value={this.state.password}
            name='password'
            onChange = {this.handleChange}
          />
          {/* <label>Password Again: </label> */}
          {/* <TextField */}
          {/*   type="password" */}
          {/*   value={this.state.passwordCheck} */}
          {/*   name='passwordCheck' */}
          {/*   onChange = {this.checkPassword} */}
          {/* /> */}
          <Button
            label="Submit"
            style={style}
            onClick={(event) => this.handleClick(event)}>
            Submit
          </Button>
        </FormControl>
      </Box>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
