import { Books } from "../utlis/mockdata";
import Book from "./Book";
import userContext from "./userContext";
import { useContext } from "react";
import CategoryContext from "./CategoryContext";
import { Link } from "react-router-dom";
import Header from "./Header";

function NonFictionBooks() {
    const data = useContext(userContext);
    const element = useContext(CategoryContext);
  return (
    <div className="bg-teal-100">
    <Header />
    <Link to="/browsebook">
    <button className="border rounded-4xl p-2 px-3 hover:bg-blue-500 hover:text-white"><i className="fa-solid fa-arrow-left text-xl px-1.5"></i></button>
    </Link>
      <h1 className="text-4xl text-center w-full mt-5">Non-Fiction Books</h1>
      <h1>{element.data}</h1>
      <div className="flex flex-wrap gap-5 m-5 justify-center">
        {Books.filter((book) => book.category=="Non-Fiction").map((book) => (
          <Book key={book.id} bookDetails={book} />
        ))}
      </div>
    </div>
  );
}

export default NonFictionBooks;