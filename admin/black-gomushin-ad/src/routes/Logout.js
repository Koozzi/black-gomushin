import React from "react";
import refresh from "../Function/Refresh";

const AppLogout = () => {
  const onClick = (event) => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("Token");
    }
    refresh();
  };
  return <span onClick={onClick}>Logout</span>;
};

export default AppLogout;
