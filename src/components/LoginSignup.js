import React from "react"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"

const LoginSignup = (props) => (
    <Box>
        <Typography>
            Don't have an account? 
            <Link to={props.link}> Create one now.</Link>
        </Typography>
    </Box>
)

export default LoginSignup
