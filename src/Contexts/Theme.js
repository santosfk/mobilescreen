import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [handleChangeTheme, setHandleChangeTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ handleChangeTheme, setHandleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
