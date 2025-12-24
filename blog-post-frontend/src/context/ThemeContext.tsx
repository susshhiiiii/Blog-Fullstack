"use client";
import { createContext, useState } from "react";

type ThemeProviderType = {
  mode: "dark" | "light";
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeProviderType>({
  mode: "dark",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const toggle = () => {
    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div
        className={`theme ${
          mode === "light" ? "light" : "dark"
        } min-h-screen flex flex-col`}
      >
        <div className="container mx-auto px-4 flex flex-col grow text-gray-400">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
