import React from "react";
import { Redirect } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withSnackbar } from "notistack";
import axios from "axios";

class ProtectedRoute extends React.Component {
  constructor() {
    super();

    // TODO: Move this somewhere useful
    const api = "http://localhost:8000/api/v1/";
    const cookie = this.getCookie("csrf_access_token");
    axios.defaults.headers.post["X-CSRF-TOKEN"] = cookie;

    // TODO: isAuthenticated needs to be added to redux
    this.state = {
      isLoading: true,
      isAuthenticated: false,
    };

    axios.post(api + "token/auth").then(
      () => {
        this.setState({ isAuthenticated: true, isLoading: false });
      },
      () => {
        this.setState({ isAuthenticated: false, isLoading: false });
      },
    );
  }

  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  render() {
    const Component = this.props.component;

    if (this.state.isLoading) {
      return <LinearProgress />;
    }

    if (this.state.isAuthenticated) {
      return <Component />;
    }

    return <Redirect to={"/login"} />;
  }
}

export default withSnackbar(ProtectedRoute);
