import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addBookAsRead, addWistList } from "../../utils/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const {
    image,
    author,
    yearOfPublishing,
    publisher,
    tags,
    review,
    category,
    rating,
    totalPages,
    bookName,
  } = book;

  const handleMarkAsRead = () => {
    addBookAsRead(id);
  };
  const handleWishList = (id) => {
    addWistList(id);
  };
  return (
    <div className="flex flex-auto">
      <div className="card bg-base-100  my-10">
        <figure className="bg-slate-300 rounded-xl">
          <img
            className="h-[564px] w-[425px] m-28 bg-cover"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-10 font-bold">{bookName}</h2>
          <p>by : {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <div>
            <b>Review : </b>
            {review}
          </div>
          <div>
            <b>
              Tags
              {tags.map((tag, i) => (
                <button key={i} className="btn btn-xs text-primary ml-2">
                  #{tag}
                </button>
              ))}
            </b>
          </div>
          <div className="divider"></div>
          <div className="flex ">
            <div>
              <p>
                <b>Number of Pages:</b>
              </p>
              <p>
                <b>Publisher:</b>
              </p>
              <p>
                <b>Year of Publishing:</b>
              </p>
              <p>
                <b>Rating:</b>
              </p>
            </div>
            <div className="ml-5">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="card-actions ">
            <button
              onClick={() => {
                handleMarkAsRead(id);
              }}
              className="btn btn-outline btn-primary"
            >
              Mark as Read
            </button>
            <button
              onClick={() => {
                handleWishList(id);
              }}
              className="btn btn-outline btn-primary"
            >
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
