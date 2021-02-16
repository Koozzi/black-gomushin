import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #a5a5a5;
  color: white;
  width: 100%;
  bottom: 0px;
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const MoveSiteBox = styled.h5`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const DevelopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Developer = styled.h6`
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const BaseInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px 5px 0px;
  margin: 0;
`;

const Border = styled.div`
  border-right: 1px solid #c4c4c4;
  padding: 0px 10px 0px 10px;
  height: 1.5vh;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const moveSite = () => {
  window.location.href = 'https://github.com/Koozzi/black-gomushin';
};

const getGitHubSite = (userName) => {
  window.location.href = `https://github.com/${userName}`;
};

const Footer = () => {
  return (
    <FooterContainer>
      <MainInfo>
        <h6>신발 중고 거래 플랫폼</h6>
        <Border></Border>
        <h5> 👟 검정고무신 </h5>
        <Border></Border>
        <MoveSiteBox onClick={moveSite}> 깃허브 구경가기 👈</MoveSiteBox>
      </MainInfo>
      <DevelopInfo>
        <h5>Developers</h5>
        <Border></Border>
        <Developer onClick={() => getGitHubSite('Zigje9')}>👨‍💻 FE-Zigje9</Developer>
        <Border></Border>
        <Developer onClick={() => getGitHubSite('Koozzi')}>👨‍🎓 BE-Koozzi</Developer>
        <Border></Border>
        <Developer onClick={() => getGitHubSite('JaeHeee')}>🤵‍♂️ Mobile-JaeHeee</Developer>
        <Border></Border>
        <Developer onClick={() => getGitHubSite('Namukk')}>🕵️‍♂️ Admin-Namukk</Developer>
      </DevelopInfo>
      <BaseInfo>
        <h6>develop period: 2021.01.30 ~ 2021.03.14</h6>
      </BaseInfo>
    </FooterContainer>
  );
};

export default Footer;
