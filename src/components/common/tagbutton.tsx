import React, { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { ResetLOGO } from "@/assets/image";

interface RefreshClick {
  onReset: () => void;
}

function TagButton({ onReset }: RefreshClick): ReactElement {
  return (
    <Wrapper>
      <ResetIcon src={ResetLOGO} />
      <ResetBtn onClick={onReset}> 필터링 리셋</ResetBtn>
    </Wrapper>
  );
}

export default TagButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 24px;

  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
    display: none;
  }
`;

const ResetBtn = styled.button`
  color: ${theme.color.SKY};
  font-size: 12px;
  padding: 10px;
`;

const ResetIcon = styled.img`
  width: 16px;
  height: 16px;
`;
