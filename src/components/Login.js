import React from 'react';
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import {Email, Password} from "../stories/LabelledInput.stories.js"
import {Primary} from "../stories/Buttons.stories.js"
import {Default} from "../stories/LoginSignup.stories.js"

const Login = () => (
    <Box>
        <Email />
        <br />
        <Password />
        <br />
        <Primary />
        <br />
        <br />
        <Default />
        <br />
    </Box>
)

export default Login
