import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const LoginSignupLink = (props) => (
  <Box pb="2rem">
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography>
        {props.text}
        <Link component={RouterLink} to={props.to}>
          {props.linkText}
        </Link>
      </Typography>
    </Grid>
  </Box>
);

export default LoginSignupLink;
