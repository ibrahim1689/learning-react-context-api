import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);

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
};

export default BookList;
