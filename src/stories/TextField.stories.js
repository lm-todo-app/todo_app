import React from 'react';

import TextField from '@material-ui/core/TextField';

export default {
  title: 'Material TextField',
};

export const Default = () => (
  <TextField variant="outlined" />
);

export const Error = () => (
  <TextField variant="outlined" error="true" />
);
