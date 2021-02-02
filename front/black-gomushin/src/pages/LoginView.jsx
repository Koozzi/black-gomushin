import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/LoginView/Input/id';
import PasswordInput from '../components/LoginView/Input/password';

const IdInputBox = styled(IdInput)`
  width: 60%;
  background-color: red;
`;

const PasswordInputbox = styled(PasswordInput)`
  height: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: space-around;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 10%;
  margin-right: 10%;
`;

const LoginView = () => {
  return (
    <Container>
      <IdInputBox></IdInputBox>
      <PasswordInputbox></PasswordInputbox>
    </Container>
  );
};

export default LoginView;
