import React from "react";
import { Logo } from "../../stories/LandingLogo.stories.js";
import { Form } from "../../stories/LoginForm.stories.js";
import { LoginLink as Link } from "../../stories/LoginSignupLink.stories.js";
import Container from "@material-ui/core/Container";
import { DefaultNavbar } from "../../stories/Navbar.stories.js";
import Box from "@material-ui/core/Box";

const Login = () => (
  <Box>
    <DefaultNavbar />
    <Container>
      <Box height={80} />
      <Logo />
      <Box height={100} />
      <Form />
      <Link to={"/signup"} />
    </Container>
  </Box>
);

export default Login;
