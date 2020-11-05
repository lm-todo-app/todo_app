import React from "react"
import {Logo} from "../../stories/LandingLogo.stories.js"
import {Form} from "../../stories/LoginForm.stories.js"
import {LoginLink as Link} from "../../stories/LoginSignupLink.stories.js"
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box"

const Login = () => (
  <Container>
    <Box height={80} />
    <Logo />
    <Box height={100} />
    <Form />
    <Link to={'/signup'} />
  </Container>
)

export default Login
