import { useSelector } from "react-redux";
import BookList from "./BookList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import CategoryContext from "./CategoryContext";
import Header from "./Header";

function AllBooks() {
  const bookData = useSelector((state) => state.books.books); 
  const userData = useContext(userContext);
  const categoryData = useContext(CategoryContext);

  console.log("Books in store:", bookData); // Debugging

  return (
    <div className="flex flex-col items-center bg-teal-100">
      <div className="w-screen">
        <Header />
        <Link to="/browsebook" className="content-start">
          <button className="border rounded-4xl p-2 px-3 hover:bg-blue-500 hover:text-white ml-3">
            <i className="fa-solid fa-arrow-left text-xl px-1.5"></i>
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <h1 className="text-center text-5xl">Book Store</h1>

        {bookData && bookData.length > 0 ? (
          <BookList bookData={bookData} />
        ) : (
          <p className="text-center text-xl mt-4">No books available</p>
        )}
      </div>
      {categoryData?.data && <h1>{categoryData.data}</h1>}
    </div>
  );
}

export default AllBooks;
