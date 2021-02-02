import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/LoginView/Input/id';
import { StylesProvider } from '@material-ui/core';

const IdInputBox = styled(IdInput)`
  background-color: red;
`;

const Container = styled.div`
  display: flex;
`;

const LoginView = () => {
  return (
    <Container>
      <span>로그인 페이지</span>
      <StylesProvider injectFirst>
        <IdInputBox></IdInputBox>
      </StylesProvider>
    </Container>
  );
};

export default LoginView;
