// GlobalFont.ts
import { createGlobalStyle } from "styled-components";
// 각 폰트 파일 import
import Font_L from "@/assets/fonts/NotoSansKR-Light.woff";
import Font_R from "@/assets/fonts/NotoSansKR-Regular.woff";
import Font_B from "@/assets/fonts/NotoSansKR-Bold.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_L}) format('woff'); 
        font-weight: lighter;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_R}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_B}) format('woff');
        font-weight: bold;
    }
`;
