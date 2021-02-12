import React from 'react';
import styled from 'styled-components';

const SignUpForm = styled.div`
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
  height: 50%;
  background-color: white;
`;

const inModal = () => {
  return (
    <>
      <SignUpForm>회원가입</SignUpForm>
    </>
  );
};

export default inModal;
