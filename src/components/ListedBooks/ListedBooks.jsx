import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from "../../utils/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [sortBooks, setSortBooks] = useState("");
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const allReadBooks = getStoredBooks();
    const allReadBooksInt = allReadBooks.map((id) => parseInt(id));
    console.log(allReadBooks, allBooks);
    const readBooks = allBooks.filter((book) =>
      allReadBooksInt.includes(book.bookId)
    );
    setReadList(readBooks);
  }, []);
  const handleSort = (sortBy) => {
    setSortBooks(sortBy);
    if (sortBy === "rating") {
      const sortBook = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortBook);
    }
    if (sortBy === "page") {
      const sortBook = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortBook);
    }
    if (sortBy === "year") {
      const sortBook = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortBook);
    }
  };
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">
          {sortBooks ? `Sort By ${sortBooks}` : "Sort By"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleSort("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort("page")}>
            <a>Number of Page</a>
          </li>
          <li onClick={() => handleSort("year")}>
            <a>Publisher Year</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>books I read : {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlisted Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
