import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
