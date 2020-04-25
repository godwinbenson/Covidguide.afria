import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { Global, css } from "@emotion/core";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { customTheme } from "./theme";
import { AppProvider } from "./AppProvider";

export const GlobalFonts = css`
  @font-face {
    font-family: Circular;
    src: url("/circular/lineto-circular-pro-bold.woff") format("woff");
    font-weight: 800;
    font-style: bold;
    font-display: fallback;
  }
  @font-face {
    font-family: Circular;
    src: url("/circular/lineto-circular-pro-book.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Circular;
    src: url("/circular/lineto-circular-pro-bookItalic.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: fallback;
  }

  @font-face {
    font-family: Circular;
    src: url("/circular/lineto-circular-pro-medium.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: Circular;
    src: url("/circular/lineto-circular-pro-mediumItalic.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: fallback;
  }
`;

const rootElement = document.getElementById("root");
const RootApp = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Global styles={GlobalFonts} />
        <AppProvider>
          <App />
        </AppProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<RootApp />, rootElement);
