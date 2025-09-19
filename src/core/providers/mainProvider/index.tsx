import React, { ReactNode } from "react";
import { ThemeProvider } from "../themeProvider";
interface MainProviderProps {
  children?: ReactNode;
}

function MainProvider({ children }: MainProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default MainProvider;
