import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';

const signUpButton = forwardRef((props, ref) => {
  return (
    <>
      <Button {...props} ref={ref}>
        회원가입
      </Button>
    </>
  );
});

export default signUpButton;
