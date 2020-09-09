import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Way Of Kings" },
    { title: "Name Of The Wind" },
    { title: "The Final Empire" },
    { title: "The Hero Of Ages" },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
