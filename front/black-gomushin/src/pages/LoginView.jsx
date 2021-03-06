import React, { useState } from 'react';
import styled from 'styled-components';
import IdInput from '../components/LoginView/Input/id';
import PasswordInput from '../components/LoginView/Input/password';
import LoginButton from '../components/LoginView/Button/login';
import SignUpButton from '../components/LoginView/Button/signUp';
import Modal from '@material-ui/core/Modal';
import InModal from '../components/LoginView/Div/modal';
import { postAxios } from '../utils/axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/user';

const IdInputBox = styled(IdInput)`
  width: 180px;
`;

const PasswordInputBox = styled(PasswordInput)`
  width: 180px;
`;

const LoginButtonBox = styled(LoginButton)`
  width: 180px;
  background-color: skyblue;
  color: white;
`;

const SignUpButtonBox = styled(SignUpButton)`
  width: 180px;
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
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const idHandler = (e) => {
    setId(e.target.value);
    e.target.value.length > 8 ? setError(true) : setError(false);
  };

  const pwHandler = (e) => {
    setPw(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const InModalBox = (
    <>
      <InModal></InModal>
    </>
  );

  const submitHandler = async () => {
    if (id.length === 0 || pw.length === 0) {
      alert('아이디 또는 비밀번호를 입력해 주세요');
    } else {
      const req = {
        username: id,
        password: pw,
      };
      const res = await postAxios('login/', req);
      if (res.data) {
        dispatch(login(res.data.token));
      }
      // TODO 로그인 실패 예외처리 추가
      history.push('/');
    }
  };

  return (
    <Container>
      <IdInputBox
        size="small"
        variant="outlined"
        onChange={idHandler}
        error={error}
        helperText={error ? '아이디는 8글자 이하입니다.' : ' '}
      ></IdInputBox>
      <PasswordInputBox
        size="small"
        variant="outlined"
        onChange={pwHandler}
        helperText=" "
      ></PasswordInputBox>
      <LoginButtonBox onClick={submitHandler}></LoginButtonBox>
      <SignUpButtonBox onClick={handleOpen}>Open Modal</SignUpButtonBox>
      <Modal open={open} onClose={handleClose}>
        {InModalBox}
      </Modal>
    </Container>
  );
};

export default LoginView;
