import React, { PropsWithChildren } from "react";
import styled from "styled-components";
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const Modal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
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
  width: 80%;
  height: 100%;
  display: flex;
  margin: 0;
  align-items: flex-start;
  border: none;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
