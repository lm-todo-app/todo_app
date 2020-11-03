import React from 'react';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'


const Input = (props) => (
  <Box pb="2rem">
    <InputLabel>{props.labelValue}:</InputLabel>
    <TextField
      variant="outlined"
      type={props.type}
      error={props.error}
      name={props.name}
    />
  </Box>
)

// Test for jest.
export const sum = (a, b) => (
  a + b
)

export default Input
