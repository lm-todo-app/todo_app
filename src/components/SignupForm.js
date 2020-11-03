import React from 'react';
import Grid from '@material-ui/core/Grid'
import {SubmitButton} from "../stories/Buttons.stories.js"
import {
  UsernameInput,
  EmailInput,
  PasswordInput
} from "../stories/LoginInput.stories.js"

const SignupForm = () => (
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
        <UsernameInput />
      </Grid>
      <Grid item xs={4}>
        <PasswordInput />
      </Grid>
      <Grid item xs={4}>
        <PasswordInput />
      </Grid>
      <Grid item xs={4}>
        <SubmitButton />
      </Grid>
    </Grid>
)

export default SignupForm
