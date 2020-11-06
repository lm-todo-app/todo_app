import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom'

// TODO: move to story
import ProtectedContent from './ProtectedContent.js'
import NavbarContent from './NavbarContent'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <ProtectedContent component={NavbarContent} />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default withRouter(Navbar);
