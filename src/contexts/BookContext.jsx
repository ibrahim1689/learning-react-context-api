import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: "Name Of The Wind" },
    { title: "The Way Of The Kings" },
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
