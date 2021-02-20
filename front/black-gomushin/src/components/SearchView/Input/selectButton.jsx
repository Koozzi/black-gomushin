import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const SelectButton = ({ valueHandler }) => {
  const [size, setSize] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>신발 사이즈</Button>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label">size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
          onChange={handleChange}
        >
          <MenuItem value={250}>250</MenuItem>
          <MenuItem value={255}>255</MenuItem>
          <MenuItem value={260}>260</MenuItem>
          <MenuItem value={265}>265</MenuItem>
          <MenuItem value={270}>270</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectButton;
