import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  // state = {  }
  render() {
    const { isLightTheme, light, dark } = this.context;

    const theme = isLightTheme ? light : dark;

    return (
      <div className="book-list">
        <ul
          style={{
            boxShadow: `0px 0px 20px ${theme.ui}`,
            color: theme.text,
            background: theme.bg,
          }}
        >
          <li>The Way Of Kings</li>
          <li>The Name Of The Wind</li>
          <li>The Final Empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
