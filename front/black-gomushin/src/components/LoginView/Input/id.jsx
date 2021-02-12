import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

const idInput = forwardRef((props, ref) => {
  return (
    <>
      <TextField {...props} ref={ref} id="outlined-search" type="text" label="id" />
    </>
  );
});

export default idInput;
