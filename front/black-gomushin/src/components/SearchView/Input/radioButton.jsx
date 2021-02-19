import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Container = styled.div`
  padding-top: 10%;
  max-height: 50px;
`;

const StyledRadio = (props) => {
  return <Radio disableRipple color="default" {...props} />;
};

const RadioButton = ({ valueHandler }) => {
  return (
    <Container>
      <FormControl component="fieldset">
        <FormLabel component="legend">상태</FormLabel>
        <RadioGroup
          onChange={valueHandler}
          defaultValue=""
          aria-label="상태"
          name="customized-radios"
        >
          <FormControlLabel value="sale" control={<StyledRadio />} label="판매중" />
          <FormControlLabel value="progress" control={<StyledRadio />} label="거래중" />
          <FormControlLabel value="sold" control={<StyledRadio />} label="판매완료" />
          <FormControlLabel value="" control={<StyledRadio />} label="선택X" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default RadioButton;
