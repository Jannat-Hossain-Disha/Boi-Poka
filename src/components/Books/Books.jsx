import React, { useDebugValue, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../../../public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-10">
      <h1 className="tex-5xl font-bold text-center"> Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book book={book} id={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
