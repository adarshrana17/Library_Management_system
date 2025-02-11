import { useParams } from "react-router-dom";
import { Books } from "../utlis/mockdata";
import { useContext } from "react";
import userContext from "./userContext";
import Header from "./Header";

function BookDetails() {
  const params = useParams();
  const Book = Books.filter((book) => book.id == params.id);
   const data = useContext(userContext)
  return (
    <>
    <Header />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-5">Book Details</h1>
        {Book.map((book) => {
          return (
            <div key={book.id} className="flex flex-col h-fit w-80 rounded-2xl flex-wrap justify-center p-5 gap-1 shadow-[0_5px_8px_rgba(0,0,0,0.3)] p-4 bg-white hover:scale-[1.06] overflow-hidden mt-10">             
              <img src={book.coverImage}  className="w-[300px] h-[200px]"/>
              <h1 className="text-lg font-bold">Title: {book.title}</h1>
              <h2 className="text-lg font-bold text-gray-500">Author: {book.author}</h2>
              <h3> <span className="font-semibold">Published:</span> {book.publicationDate}</h3>
              <h3> <span className="font-semibold">Rating:</span> {book.rating}</h3>
              <h3><span className="font-semibold">Description:</span> {book.description}</h3>
              <h3> <span className="font-semibold">Pages:</span> {book.pages} </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BookDetails;
