import React from 'react';
import TextField from '@material-ui/core/TextField';

const PriceInput = ({ valueHandler, inputLabel = '최소금액' }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField onChange={valueHandler} id="standard-basic" label={inputLabel} />
    </form>
  );
};

export default PriceInput;
