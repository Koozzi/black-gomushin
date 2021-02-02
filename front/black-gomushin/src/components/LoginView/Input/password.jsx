import React from 'react';
import TextField from '@material-ui/core/TextField';

const passwordInput = () => {
  return (
    <>
      <TextField
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    </>
  );
};

export default passwordInput;
