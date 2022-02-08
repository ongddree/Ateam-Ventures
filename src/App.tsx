import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global-styles";
import GlobalFont from "./styles/global-font";
import { theme } from "./styles/theme";
import MainBoard from "@/components/main-board/main-board";
import Header from "@/components/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <Header />
      <PaddingWarp>
        <MainBoard />
      </PaddingWarp>
    </ThemeProvider>
  );
}

export default App;

const PaddingWarp = styled.div`
  // 이런 식으로 theme을 props 받아서 사용하면 됩니다.
  /* background-color: ${({ theme }) => theme.color.red}; */
  @media screen and (max-width: ${({ theme }) => theme.size.MOBILE}px) {
  }
`;
