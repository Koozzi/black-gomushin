import React, { useState } from 'react';
import styled from 'styled-components';
import IdInput from '../components/LoginView/Input/id';
import PasswordInput from '../components/LoginView/Input/password';
import LoginButton from '../components/LoginView/Button/login';
import SignUpButton from '../components/LoginView/Button/signUp';
import Modal from '@material-ui/core/Modal';

const IdInputBox = styled(IdInput)`
  width: 150px;
`;

const PasswordInputBox = styled(PasswordInput)`
  width: 150px;
`;

const LoginButtonBox = styled(LoginButton)`
  width: 150px;
  background-color: skyblue;
  color: white;
`;

const SignUpButtonBox = styled(SignUpButton)`
  width: 150px;
  background-color: pink;
  color: white;
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
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const idHandler = (e) => {
    if (id.length > 7) {
      alert('아이디는 8자 이하입니다');
      e.target.value = e.target.value.slice(0, 8);
      setId(e.target.value);
    } else {
      setId(e.target.value);
    }
  };

  const pwHandler = (e) => {
    if (pw.length > 9) {
      alert('비밀번호는 10자 이하입니다');
      e.target.value = e.target.value.slice(0, 10);
      setPw(e.target.value);
    } else {
      setPw(e.target.value);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = <div>1</div>;

  return (
    <Container>
      <IdInputBox variant="outlined" onChange={idHandler}></IdInputBox>
      <PasswordInputBox variant="outlined" onChange={pwHandler}></PasswordInputBox>
      <LoginButtonBox></LoginButtonBox>
      <div>
        <SignUpButtonBox onClick={handleOpen}>Open Modal</SignUpButtonBox>
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
      </div>
    </Container>
  );
};

export default LoginView;
