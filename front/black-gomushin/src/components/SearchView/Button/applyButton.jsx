import React from 'react';
import Button from '@material-ui/core/Button';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

const ApplyButton = () => {
  return (
    <Button variant="contained" color="default" startIcon={<FindReplaceIcon />}>
      적용하기
    </Button>
  );
};

export default ApplyButton;
