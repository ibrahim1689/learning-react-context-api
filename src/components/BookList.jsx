import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  const { books } = useContext(BookContext);

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
        {books.map((book, index) => {
          return <li key={index}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
