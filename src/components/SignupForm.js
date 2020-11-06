import React from 'react';
import Grid from '@material-ui/core/Grid'
import {SubmitButton} from "../stories/Buttons.stories.js"
import {withRouter} from 'react-router-dom'
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
       console.log('passwords do not match')
       return;
     }
    axios.post('http://localhost:8000/api/v1/users',
      {
        'email': this.state.email,
        'username': this.state.username,
        'password': this.state.password,
      },
    ).then((response) => {
      console.log('success')
      this.props.history.push("/")
    }).catch((error) => {
      console.log('fail')
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
        <Grid item xs={4}>
          <EmailInput
            value={this.state.email}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
          <UsernameInput
            value={this.state.username}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput
            value={this.state.password}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
          <PasswordCheckInput
            value={this.state.passwordCheck}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
          <SubmitButton
            onClick={this.handleClick} />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(SignupForm)
