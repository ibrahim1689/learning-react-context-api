import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  // state = {  }

  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    const { isLightTheme, dark, light } = this.context;

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
  }
}

export default Navbar;