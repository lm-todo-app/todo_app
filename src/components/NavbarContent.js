import React from "react";
import Typography from "@material-ui/core/Typography";
import { LogoutButton } from "../stories/Buttons.stories.js";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { withSnackbar } from "notistack";
import axios from "axios";

class NavbarContent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  handleClick = (event) => {
    // TODO: refactor this
    const api = "http://localhost:8000/api/v1/";
    const cookie = this.getCookie("csrf_access_token");
    axios.defaults.headers.post["X-CSRF-TOKEN"] = cookie;
    axios.post(api + "token/remove").then(
      () => {
        console.log("success");
        this.props.enqueueSnackbar("Logout Successful", {
          variant: "success",
        });
        this.props.history.push("/login");
      },
      (error) => {
        console.log("fail");
        console.log(error);
      },
    );
  };

  render() {
    return (
      <Grid
        container
        alignItems="center"
        justify="space-between"
        spacing={24}
        row
      >
        <Grid item>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
            <Box pl="1rem">
              <Typography variant="h6">Todo</Typography>
            </Box>
          </IconButton>
        </Grid>
        <Grid item>
          <LogoutButton onClick={this.handleClick} />
        </Grid>
      </Grid>
    );
  }
}

export default withSnackbar(withRouter(NavbarContent));
