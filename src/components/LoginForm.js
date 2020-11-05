import React from 'react';
import Grid from '@material-ui/core/Grid'
import {EmailInput, PasswordInput} from "../stories/LoginInput.stories.js"
import {SubmitButton} from "../stories/Buttons.stories.js"
import {withRouter} from 'react-router-dom'
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
    axios.post('http://localhost:8000/api/v1/login',
      {
        'email': this.state.email,
        'password': this.state.password,
      },
    ).then((response) => {
      console.log('success')
      this.props.history.push("/")
    }, (error) => {
      console.log('fail')
      console.log(error);
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
        justify="center" >
        <Grid item xs={4}>
          <EmailInput
            value={this.state.email}
            onChange={this.handleChange} />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput
            value={this.state.password}
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

export default withRouter(LoginForm)
