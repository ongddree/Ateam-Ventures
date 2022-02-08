import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { TitleLOGO } from '@/assets/image'
import { VectorLOGO } from '@/assets/image';

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <LogoIcon src={TitleLOGO} />
      <Wrapper>
        <VectorIcon src={VectorLOGO} />
        <HeaderText> AI 가공 업체</HeaderText>
        <HeaderText> | </HeaderText>
        <HeaderText>로그아웃</HeaderText>
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${theme.color.BLUE};
    display: flex;
    justify-content: space-between;
`;

const LogoIcon = styled.img`
    width: 153px;
    height: 20px;
    margin: 25px 40px;
`;

const Wrapper = styled.div`
    justify-content: space-between;
    margin: 25px;
`;

const HeaderText = styled.span`
    color: ${theme.color.WHITE};
    font-size: 14px;
    padding-right: 10px; 
`;

const VectorIcon = styled.img`
    width: 16.67px;
    height: 15px;
`;


export default Header;
