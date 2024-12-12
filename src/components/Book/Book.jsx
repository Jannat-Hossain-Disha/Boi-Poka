import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-4">
        <figure className="rounded-2xl bg-[#F3F3F3] p-6">
          <img className="h-[166px] cover" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-2 ">
            {tags.map((tag) => (
              <button className="btn btn-xs bg-green-300 text-green-700">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>

          <p>{author}</p>
          <div className="border-b-4  border-dotted"></div>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
