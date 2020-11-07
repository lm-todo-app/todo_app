import React from "react";
import LoginSignupLink from "../components/LoginSignupLink.js";

export default {
  title: "Landing/Login-Signup Link",
};

export const DefaultLoginSignupLink = (props) => (
  <LoginSignupLink to={props.to} />
);

export const LoginLink = (props) => (
  <LoginSignupLink
    to={props.to}
    text={"Don't have an account? "}
    linkText={"Create one now."}
  />
);

export const SignupLink = (props) => (
  <LoginSignupLink
    to={props.to}
    text={"Already have an account? "}
    linkText={"login."}
  />
);
