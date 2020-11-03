import React from 'react'
import {Redirect} from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        // const isAuthenticated = false;
        const isAuthenticated = true;

      if (isAuthenticated) {
        return (
            <Component />
        )
      }
        return (
            <Redirect to={'/login'} />
        )
    }
}

export default ProtectedRoute;
