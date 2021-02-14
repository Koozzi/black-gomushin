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

const MoveSiteBox = styled.h5`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const DevelopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Developer = styled.h5`
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;

const BaseInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
        <h5>신발 중고 거래 플랫폼</h5>
        <h3> 👟 검정고무신 </h3>
        <MoveSiteBox onClick={moveSite}> 깃허브 구경가기 👈</MoveSiteBox>
      </MainInfo>
      <DevelopInfo>
        <h3>Developers</h3>
        <Developer onClick={() => getGitHubSite('Zigje9')}>👨‍💻 FE-Zigje9</Developer>
        <Developer onClick={() => getGitHubSite('Koozzi')}>👨‍🎓 BE-Koozzi</Developer>
        <Developer onClick={() => getGitHubSite('JaeHeee')}>🤵‍♂️ Mobile-JaeHeee</Developer>
        <Developer onClick={() => getGitHubSite('Namukk')}>🕵️‍♂️ Admin-Namukk</Developer>
      </DevelopInfo>
      <BaseInfo>
        <h6>develop period: 2021.01.30 ~ 2021.03.14</h6>
      </BaseInfo>
    </FooterContainer>
  );
};

export default Footer;
