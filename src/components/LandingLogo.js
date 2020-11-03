import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const LandingLogo = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Typography variant="h1">Todo.</Typography>
    <Box pb="4rem"></Box>
    <Typography variant="h5">Task lists anywhere and everywhere.</Typography>
  </Grid>
)

export default LandingLogo
