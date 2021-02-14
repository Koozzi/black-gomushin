import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const Navigation = () => {
  return (
    <div>
      <span>Black Gomushin</span>
      <List>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </List>
    </div>
  );
};

export default Navigation;
