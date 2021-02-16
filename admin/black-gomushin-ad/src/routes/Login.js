import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import appApi from "../api";
import refresh from "../Function/Refresh";

const InputSpan = styled.form`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const AppLogin = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "Account") {
      setId(value);
    }
    if (name === "Password") {
      setPw(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const req = {
      username: id,
      password: pw,
    };
    const res = await appApi.post("login/", req);
    const {
      data: { token },
    } = res;
    localStorage.setItem("Token", token);
    if (token) {
      history.push("/");
    }
    refresh();
  };

  // const onClick = () => {};
  return (
    <InputSpan onSubmit={onSubmit}>
      <input placeholder="ID" name="Account" onChange={onChange} />
      <input placeholder="Password" name="Password" onChange={onChange} />
      <button type="submit">로그인</button>
    </InputSpan>
  );
};

export default AppLogin;
