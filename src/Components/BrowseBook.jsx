import { useState } from "react";
import BookList from "./BookList";
import FamousBookList from "./FamousBookList"; 
import { Books } from "../utlis/mockdata";
import { Link } from "react-router-dom";
import Header from "./Header";

function BrowseBook() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBook] = useState(null); 

  function handleSearch() {
    if (searchText === "") {
      setFilteredBook(null);
    } else {
      const filterBooks = Books.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBook(filterBooks);
    }
  }

  return (
    <div className="flex flex-col bg-teal-100">
    <Header />
      <div>
        <div className="flex justify-center items-center w-screen m-5">
          <input type="text" onChange={(e) => setSearchText(e.target.value)} className="border border-gray-400 p-2 rounded w-96" placeholder="Search a book"/>
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Search</button>
        </div>
            <Link to="/allbooks">
      <button className=" text-center absolute right-16 text-lg border-1 p-2 rounded hover:bg-blue-500 hover:text-white lg:absolute -mr-7">Book Store</button>
      </Link>
      </div>
      {filteredBooks === null ? (<FamousBookList />) : filteredBooks.length > 0 ? (<BookList bookData={filteredBooks} />) : (
<h1 className="text-center w-screen text-5xl font-semibold mt-5">No Book Found</h1>)}
    </div>
  );
}

export default BrowseBook;

