import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FormControlBox = styled(FormControl)`
  display: flex;
  width: 100px;
`;

const SelectStateButton = ({ valueHandler }) => {
  const [state, setState] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleState = (e) => {
    setState(e.target.value);
    valueHandler(e);
  };

  return (
    <div>
      <FormControlBox>
        <InputLabel id="demo-controlled-open-select-label">상태</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={state}
          onChange={handleState}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={'sale'}>판매중</MenuItem>
          <MenuItem value={'progress'}>거래중</MenuItem>
          <MenuItem value={'sold'}>판매완료</MenuItem>
        </Select>
      </FormControlBox>
    </div>
  );
};

export default SelectStateButton;
