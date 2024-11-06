import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {
    return { backgroundColor: "#000", color: "#fff" };
  },
  lightTheme: () => {
    return { backgroundColor: "#f0f0f0", color: "#000000" };
  },
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
