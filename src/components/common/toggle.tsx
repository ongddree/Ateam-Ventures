import React, { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";

interface IToggle {
  onToggle: () => void;
}

function Toggle(props: IToggle): ReactElement {
  return (
    <ToggleContainer>
      <input type="checkbox" onChange={props.onToggle} />
      <ToggleSpan />
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 15px;

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + span::before {
    transform: translateX(15px);
    background-color: ${theme.color.LIGHTBLUE};
  }

  input[type="checkbox"]:checked + span {
    background-color: ${theme.color.LIGHTSKY};
  }
`;

const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${theme.color.DARKGRAY};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  ::before {
    position: absolute;
    content: "";
    left: 0;
    top: -3px;
    width: 21px;
    height: 21px;
    background-color: ${theme.color.LIGHTGRAY};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.1);
  }
`;
