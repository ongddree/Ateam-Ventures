import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // basicWidth: string;

    color: { [key in Color]: string };
    size: { MOBILE: number };
  }
}
