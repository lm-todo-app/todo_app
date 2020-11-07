import React from "react";
import Grid from "@material-ui/core/Grid";
import { EmailInput, PasswordInput } from "../stories/LoginInput.stories.js";
import { SubmitButton } from "../stories/Buttons.stories.js";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleClick = (event) => {
    // TODO: refactor this
    axios
      .post("http://localhost:8000/api/v1/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(
        () => {
          this.props.enqueueSnackbar("Login Successful", {
            variant: "success",
          });
          this.props.history.push("/");
        },
        (error) => {
          this.props.enqueueSnackbar(
            "Login Failed: " + error.response.statusText,
            {
              variant: "error",
            },
          );
          console.log(error.response);
        },
      );
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <EmailInput value={this.state.email} onChange={this.handleChange} />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton onClick={this.handleClick} />
        </Grid>
      </Grid>
    );
  }
}

export default withSnackbar(withRouter(LoginForm));
