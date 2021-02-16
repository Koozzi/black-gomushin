import React, { useEffect, useState } from "react";
import AppRouter from "./Router";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [token, setToken] = useState("");
  // const getToken = () => {
  //   setToken(localStorage.getItem("Token"));
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getToken = () => {
    const token = localStorage.getItem("Token");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
