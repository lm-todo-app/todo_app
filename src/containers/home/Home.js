import React from "react"
import Box from "@material-ui/core/Box"
import Container from '@material-ui/core/Container';
import {DefaultNavbar as Navbar} from '../../stories/Navbar.stories.js'

const Home = () => (
  <Box>
    <Navbar />
    <Container>
      Home
    </Container>
  </Box>
)

export default Home
