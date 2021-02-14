import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  background-color: #a5a5a5;
  color: white;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Footer = () => {
  const moveSite = () => {
    window.location.href = 'https://github.com/Koozzi/black-gomushin';
  };
  return (
    <FooterContainer>
      <MainInfo>
        <h5>신발 중고 거래 플랫폼</h5>
        <h3> 👟 검정고무신 </h3>
        <h3 onClick={moveSite}> 깃허브 구경가기 👈</h3>
      </MainInfo>
      <div>
        <div>Developers</div>
        <div>Production Period</div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
