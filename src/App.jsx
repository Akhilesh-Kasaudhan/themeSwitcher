import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <>
        <h1 className="p-4 bg-pink-600 text-3xl text-center font-bold">
          Theme Changer
        </h1>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themeBtn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
