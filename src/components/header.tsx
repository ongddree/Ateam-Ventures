import React, { ReactElement, useCallback, useState } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { TitleLOGO } from "@/assets/image";
import { VectorLOGO } from "@/assets/image";
import { MenuLOGO } from "@/assets/image";
import Modal from "./modal";

function Header(): ReactElement {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
    console.log(isOpenModal);
  }, [isOpenModal]);

  return (
    <HeaderContainer>
      {isOpenModal && <Modal onClickToggleModal={onClickToggleModal}></Modal>}
      <MobileWarp>
        <MenuButton onClick={onClickToggleModal}>
          <MenuIcon src={MenuLOGO} />
        </MenuButton>

        <LogoIcon src={TitleLOGO} />
      </MobileWarp>

      <Wrapper>
        <VectorIcon src={VectorLOGO} />
        <HeaderText> AI 가공 업체</HeaderText>
        <HeaderText> | </HeaderText>
        <HeaderText>로그아웃</HeaderText>
      </Wrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${theme.color.BLUE};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: flex;
    height: 44px;
  }
`;

const MobileWarp = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;

const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: flex;
    padding: 23px;
  }
`;
const MenuIcon = styled.img`
  width: 18px;
  height: 12px;
`;

const LogoIcon = styled.img`
  width: 153px;
  height: 20px;
  margin: 25px 40px;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    width: 91.8px;
    height: 12px;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  justify-content: space-between;
  margin: 25px;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    margin: 0;
  }
`;

const HeaderText = styled.span`
  color: ${theme.color.WHITE};
  font-size: 14px;
  padding-right: 10px;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: none;
  }
`;

const VectorIcon = styled.img`
  width: 16.67px;
  height: 15px;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: none;
  }
`;

export default Header;
