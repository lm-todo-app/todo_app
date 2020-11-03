import React from 'react';
import Grid from '@material-ui/core/Grid'
import {EmailInput, PasswordInput} from "../stories/LoginInput.stories.js"
import {PrimaryButton} from "../stories/Buttons.stories.js"
import {DefaultLoginSignupLink} from "../stories/LoginSignupLink.stories.js"

const LoginForm = () => (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      >
      <Grid item xs={4}>
        <EmailInput />
      </Grid>
      <Grid item xs={4}>
        <PasswordInput />
      </Grid>
      <Grid item xs={4}>
        <PrimaryButton />
      </Grid>
      <Grid item xs={4}>
        <DefaultLoginSignupLink />
      </Grid>
    </Grid>
)

export default LoginForm
