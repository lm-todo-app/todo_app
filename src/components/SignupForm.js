import React from 'react';
import Grid from '@material-ui/core/Grid'
import {SubmitButton} from "../stories/Buttons.stories.js"
import {withRouter} from 'react-router-dom'
import { withSnackbar } from 'notistack';
import axios from 'axios'
import {
  UsernameInput,
  EmailInput,
  PasswordInput,
  PasswordCheckInput,
} from "../stories/LoginInput.stories.js"

class SignupForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: null,
      username: null,
      password: null,
      passwordCheck: null,
    }
  }

  checkPassword = () => {
    if (this.state.password && this.state.passwordCheck) {
      return (this.state.password === this.state.passwordCheck)
    }
  }

   handleClick = (event) => {
     if (!this.checkPassword()) {
       this.props.enqueueSnackbar("Passwords do not match")
       return;
     }
    // TODO: refactor this
    axios.post('http://localhost:8000/api/v1/users',
      {
        'email': this.state.email,
        'username': this.state.username,
        'password': this.state.password,
      },
    ).then((response) => {
      const message = "Signup Successful, please check for confirmation email"
      this.props.enqueueSnackbar(message, {
        variant: 'success',
      })
      this.props.history.push("/")
    }).catch((error) => {
      this.props.enqueueSnackbar("Signup Failed: " + error.response.statusText,
        {
          variant: 'error',
        })
      console.log(error.response);
    });
  }

  handleChange = (event) => {
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
        <Grid item xs={12}>
          <EmailInput
            value={this.state.email}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12}>
          <UsernameInput
            value={this.state.username}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            value={this.state.password}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12}>
          <PasswordCheckInput
            value={this.state.passwordCheck}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton
            onClick={this.handleClick} />
        </Grid>
      </Grid>
    )
  }
}

export default withSnackbar(withRouter(SignupForm))
