import React from 'react';

import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box"
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material Button',
};

export const PrimaryButton = () => (
  <Box pb="2rem">
    <Button
      color="primary"
      onClick={action('Primary button clicked')}
      variant="contained">
      Primary
    </Button>
  </Box>
);

export const SecondaryButton = () => (
  <Box pb="2rem">
    <Button
      color="secondary"
      onClick={action('Secondary button clicked')}
      variant="contained">
      pb="2rem">
    </Button>
  </Box>
);