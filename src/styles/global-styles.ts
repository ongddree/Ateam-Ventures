import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  body{
        font-family: "Font-test"; // 폰트 설정
        
    }

  ol,
  ul {
  list-style: none;
  }

`;

export default GlobalStyle;
