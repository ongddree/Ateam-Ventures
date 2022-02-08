import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { TitleMobileLOGO, VectorMobileLOGO } from "@/assets/image";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const Modal = ({ onClickToggleModal }: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalContainer>
      <DialogBox>
        <Warp>
          <HeaderWarp>
            <TitleMobileIcon src={TitleMobileLOGO} />
          </HeaderWarp>
          <Diveder />
          <MenuList>
            <li>
              <LogoIcon src={VectorMobileLOGO} />
              <span>파트너정밀가공</span>
            </li>
            <li>
              <span>로그아웃</span>
            </li>
          </MenuList>
        </Warp>
      </DialogBox>

      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9998;
`;

const DialogBox = styled.dialog`
  width: 280px;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  background-color: ${theme.color.WHITE};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 10000;
`;

const Warp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const HeaderWarp = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TitleMobileIcon = styled.img`
  width: 91.52px;
  height: 12px;
`;

const LogoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

const Diveder = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${theme.color.GRAY};
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 36px 32px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    span {
      width: 91px;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      color: ${theme.color.FONTCOLOR};
      font-weight: 500;
    }
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${theme.color.BLACK};
  opacity: 50%;
`;
