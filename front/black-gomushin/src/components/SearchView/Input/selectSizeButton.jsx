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

const SelectButton = ({ valueHandler }) => {
  const [size, setSize] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
    valueHandler(e);
  };

  return (
    <div>
      <FormControlBox>
        <InputLabel id="demo-controlled-open-select-label">size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
          onChange={handleSize}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={250}>250</MenuItem>
          <MenuItem value={255}>255</MenuItem>
          <MenuItem value={260}>260</MenuItem>
          <MenuItem value={265}>265</MenuItem>
          <MenuItem value={270}>270</MenuItem>
        </Select>
      </FormControlBox>
    </div>
  );
};

export default SelectButton;
