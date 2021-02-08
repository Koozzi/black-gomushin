import React from 'react';
import styled from 'styled-components';

const MainView = () => {
  const Container = styled.div`
    display: flex;
    background-color: yellow;
  `;

  const AD = styled.div`
    background-color: pink;
  `;

  return (
    <Container>
      <AD>ad-img</AD>
    </Container>
  );
};

export default MainView;
