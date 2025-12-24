"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  console.log(mode);
  return (
    <div
      onClick={() => toggle()}
      className="flex cursor-pointer relative border gap-2 rounded-4xl"
    >
      <div>🌙</div>
      <div>🔅</div>
      <div
        className={`bg-green-500 absolute p-3 rounded-4xl ${
          mode === "dark" ? "ms-4" : ""
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
