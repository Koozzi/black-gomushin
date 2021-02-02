import React from 'react';
import styled from 'styled-components';
import IdInput from '../components/LoginView/Input/id';
import PasswordInput from '../components/LoginView/Input/password';
import LoginButton from '../components/LoginView/Button/login';

const IdInputBox = styled(IdInput)`
  width: 60%;
  background-color: red;
`;

const PasswordInputBox = styled(PasswordInput)`
  height: 300px;
`;

const LoginButtonBox = styled(LoginButton)``;

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
      <PasswordInputBox></PasswordInputBox>
      <LoginButtonBox></LoginButtonBox>
    </Container>
  );
};

export default LoginView;
