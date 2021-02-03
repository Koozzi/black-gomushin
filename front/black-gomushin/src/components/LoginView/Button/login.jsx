import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';

const loginButton = forwardRef((props, ref) => {
  return (
    <>
      <Button {...props} ref={ref}>
        Login
      </Button>
    </>
  );
});

export default loginButton;
