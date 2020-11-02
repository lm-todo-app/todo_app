import React from 'react';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'

const LabelledInput = (props) => (
    <Box>
        <InputLabel>{props.labelValue}:</InputLabel>
        <TextField variant="outlined" type={props.type} />
    </Box>
)

// Test for jest.
export const sum = (a, b) => (
    a + b
)

export default LabelledInput
