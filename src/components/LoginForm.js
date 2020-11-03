import React from 'react';
import Grid from '@material-ui/core/Grid'
import {EmailInput, PasswordInput} from "../stories/LoginInput.stories.js"
import {PrimaryButton} from "../stories/Buttons.stories.js"
import {DefaultLoginSignupLink} from "../stories/LoginSignupLink.stories.js"
import axios from 'axios'

class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: null,
      password: null,
    }
  }

   handleClick = (event) => {
    console.log(this.state)
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
    console.log(this.state)
    console.log('hello world')
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        >
        <Grid item xs={4}>
          <EmailInput
            value={this.state.email}
            onChange={this.handleChange}
          >
          </EmailInput >
        </Grid>
        <Grid item xs={4}>
          <PasswordInput
            value={this.state.password}
            onChange={this.handleChange}
          >
          </PasswordInput>
        </Grid>
        <Grid item xs={4}>
          <PrimaryButton
            onClick={(event) => this.handleClick(event)}>
          >
          </PrimaryButton>
        </Grid>
        <Grid item xs={4}>
          <DefaultLoginSignupLink />
        </Grid>
      </Grid>
    )
  }
}

export default LoginForm
