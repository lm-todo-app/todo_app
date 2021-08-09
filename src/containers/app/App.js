import React from "react";
import "./App.css";

import ProtectedRoute from "../../components/ProtectedRoute.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// TODO: Get navbar to refresh so it can stay on this page. Content does not
// appear on login because protectedContent is only run once.
//
// import {DefaultNavbar} from '../../stories/Navbar.stories.js'
//
import Login from "../login/Login.js";
import Signup from "../signup/Signup.js";
import Home from "../home/Home.js";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      maxSnack={3}
    >
      <Router id="router">
        <Switch>
          <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="*">
            <Redirect to={"/login"} />
          </Route>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
