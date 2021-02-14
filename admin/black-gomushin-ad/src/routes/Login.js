import React from "react";
import styled from "styled-components";
import { LoginApi } from "../api";

const InputSpan = styled.form`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const onChange = (event) => {
  const {
    target: { name, value },
  } = event;
  console.log(value);
  if (name === "Account") {
  }
};

const onSubmit = (event) => {
  event.preventDefault();
};

const onClick = () => {
  // console.log(LoginApi.value);
};

const AppLogin = () => {
  return (
    <InputSpan onSubmit={onSubmit}>
      <input placeholder="ID" name="Account" onChange={onChange} />
      <input placeholder="Password" name="Password" onChange={onChange} />
      <button onClick={onClick} type="submit">
        로그인
      </button>
    </InputSpan>
  );
};

export default AppLogin;
