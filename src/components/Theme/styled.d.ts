import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryText: string;
    secondaryText: string;
    background: string;
    scrollbarBackground: string;
    scrollbarColor: string;
  }
}
