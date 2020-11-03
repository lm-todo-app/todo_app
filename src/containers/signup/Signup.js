import React from "react"
import {DefaultSignupForm} from "../../stories/SignupForm.stories.js"
import {DefaultLandingLogo} from "../../stories/LandingLogo.stories.js"
import {DefaultSignupLink} from "../../stories/LoginSignupLink.stories.js"
import Box from "@material-ui/core/Box"

const Signup = () => (
  <Box>
    <Box height={100} />
    <DefaultLandingLogo />
    <Box height={100} />
    <DefaultSignupForm />
    <DefaultSignupLink to={'/'} />
  </Box>
)

export default Signup
