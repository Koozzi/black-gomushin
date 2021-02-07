import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

const passwordInput = forwardRef((props, ref) => {
  return (
    <form>
      <TextField
        {...props}
        ref={ref}
        id="outlined-password-input"
        label="password"
        type="password"
        autoComplete="new-password"
      />
    </form>
  );
});

export default passwordInput;
