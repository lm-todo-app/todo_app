import React from "react";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { action } from "@storybook/addon-actions";

export default {
  title: "Material Button",
};

export const PrimaryButton = (props) => (
  <Box pb="2rem">
    <Button color="primary" onClick={props.onClick} variant="contained">
      Primary
    </Button>
  </Box>
);

export const SubmitButton = (props) => (
  <Box pb="2rem">
    <Button color="primary" onClick={props.onClick} variant="contained">
      Submit
    </Button>
  </Box>
);

export const LogoutButton = (props) => (
  <Box pb="1rem" mt="1rem">
    <Button color="primary" onClick={props.onClick} variant="contained">
      Logout
    </Button>
  </Box>
);

export const SecondaryButton = () => (
  <Box pb="2rem">
    <Button
      color="secondary"
      onClick={action("Secondary button clicked")}
      variant="contained">
      Secondary
    </Button>
  </Box>
);
