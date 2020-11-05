import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {LogoutButton} from "../stories/Buttons.stories.js"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  handleClick = (event) => {
    // TODO: refactor this with protected route
    const api = 'http://localhost:8000/api/v1/'
    const cookie = this.getCookie('csrf_access_token')
    axios.defaults.headers.post['X-CSRF-TOKEN'] = cookie
    axios.post(api + 'token/remove')
      .then((response) => {
      console.log('success')
      // window.location.reload(false);
      this.props.history.push("/login")
    }, (error) => {
      console.log('fail')
      console.log(error);
    });
  }

  render() {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box
              display="flex"
              flexGrow={1}
              alignItems="center">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu" >
                <MenuIcon />
              </IconButton>
              <Box pl="2rem">
                <Typography
                  variant="h6" >
                  Todo
                </Typography>
              </Box>
            </Box>
            <LogoutButton
              onClick={this.handleClick} />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default withRouter(Navbar);
