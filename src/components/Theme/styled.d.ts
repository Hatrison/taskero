import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Text
    primaryText: string;
    secondaryText: string;
    invertedText: string;

    // Background
    background: string;
    backgroundSecondary: string;
    cardBackground: string;
    headerBackground: string;
    sidebarBackground: string;

    // Scrollbar
    scrollbarBackground: string;
    scrollbarColor: string;

    // Borders
    borderColor: string;
    modalBorder: string;

    // Icons/Elements
    modalCloseIconColor: string;
    modalCloseIconColorHover: string;

    // Accents
    primary: string;
    primaryHover: string;
    secondary: string;
    danger: string;
    success: string;
    warning: string;
    info: string;

    // Roles
    roleOwner: string;
    roleEditor: string;
    roleViewer: string;
    roleTextColor: string;

    // Shadows and Effects
    shadow: string;

    // Buttons
    buttonText: string;
    buttonBackground: string;
    buttonBackgroundHover: string;

    // Animations
    animation: string;

    // Stars
    starColor: string;
    starColorInactive: string;

    // Members
    membersAvatarBackground: string;
  }
}
