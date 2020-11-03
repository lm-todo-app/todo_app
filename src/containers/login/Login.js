import React from "react"
import {DefaultLoginForm} from "../../stories/LoginForm.stories.js"
import {DefaultLandingLogo} from "../../stories/LandingLogo.stories.js"
import {DefaultLoginLink} from "../../stories/LoginSignupLink.stories.js"
import Box from "@material-ui/core/Box"

const Login = () => (
  <Box>
    <Box height={100} />
    <DefaultLandingLogo />
    <Box height={100} />
    <DefaultLoginForm />
    <DefaultLoginLink to={'/signup'} />
  </Box>
)

export default Login
