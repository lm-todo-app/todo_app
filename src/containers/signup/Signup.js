import React from "react"
import {Form} from "../../stories/SignupForm.stories.js"
import {SignupLink as Link} from "../../stories/LoginSignupLink.stories.js"
import Container from '@material-ui/core/Container';
import {DefaultNavbar} from '../../stories/Navbar.stories.js'
import Box from "@material-ui/core/Box"

const Signup = () => (
  <Box>
    <DefaultNavbar />
    <Container>
      <Box height={100} />
      <Form />
      <Link to={'/login'} />
    </Container>
  </Box>
)

export default Signup
