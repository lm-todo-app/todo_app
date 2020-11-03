import React from "react"
import {DefaultLoginForm} from "../../stories/LoginForm.stories.js"
import {DefaultLandingLogo} from "../../stories/LandingLogo.stories.js"
import Box from "@material-ui/core/Box"

const Landing = () => (
  <Box>
    <Box height={200} />
    <DefaultLandingLogo />
    <Box height={200} />
    <DefaultLoginForm />
  </Box>
)

export default Landing
