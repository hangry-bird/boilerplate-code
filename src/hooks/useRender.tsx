import React from 'react';
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

// styles
// import theme from "styles/theme";


const theme={}


const useRender = (children: JSX.Element | JSX.Element[]) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default useRender;