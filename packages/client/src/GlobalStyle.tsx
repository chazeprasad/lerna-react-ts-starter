// GlobalStyle.tsx
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { FONT_FAMILY } from "./config-global";

const globalStyles = css`
  @font-face {
    font-family: "${FONT_FAMILY.NAME}";
    src: "${FONT_FAMILY.PATH}";
    src: url(FONT_FAMILY.PATH);
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: "${FONT_FAMILY.NAME}", sans-serif;
    font-weight: 400;
    font-size: 16px;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    color: black;
  }

  * {
    list-style: none;
  }

  table td,
  table th {
    padding: 0;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
