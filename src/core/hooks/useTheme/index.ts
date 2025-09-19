import { ThemeContext } from "@/core/providers/themeProvider";
import { useContext } from "react";

const useTheme = () => useContext(ThemeContext);

export { useTheme };
