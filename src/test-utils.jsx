import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyles from "styles/global";

import { ToastContainer } from "react-toastify";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
