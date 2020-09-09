import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthed, toggleAuth } = useContext(AuthContext);

  const theme = isLightTheme ? light : dark;

  return (
    <nav
      style={{
        color: theme.text,
      }}
    >
      <h1
        style={{
          background: theme.bg,
          boxShadow: `0px 0px 20px ${theme.ui}`,
        }}
      >
        Context App
        <p onClick={toggleAuth}>{isAuthed ? "Logged in" : "Logged out"}</p>
      </h1>

      <ul
        style={{
          boxShadow: `0px 0px 20px ${theme.ui}`,
          background: theme.bg,
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
