import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: false,
    light: {
      text: "#555",
      ui: "rgb(171, 171, 171)",
      bg: "#eee",
    },
    dark: {
      text: "#ddd",
      ui: "#191b1f",
      bg: "#282c34",
    },
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
