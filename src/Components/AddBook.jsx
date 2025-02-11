import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utlis/booksSlice";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", rating: "", publicationDate: "", category: "", description: "", imageURL: "",});
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(book));
    setBook({ title: "", author: "", rating: "", publicationDate: "", description: "", imageURL: "",});
    navigate("/allbooks"); 
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-fit bg-teal-100 py-10">
        <form
          onSubmit={handleSubmit}
          className="p-8 w-full sm:w-96 bg-white rounded-xl shadow-lg space-y-6"
        >
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            Add Book
          </h1>

          <div className="flex flex-col gap-4">
            <input type="text" name="title" value={book.title} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Book Title" required />
            <input type="text" name="author" value={book.author} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Author" required />
            <input type="number" name="rating" value={book.rating} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Rating (1-5)" required />
            <input type="date" name="publicationDate" value={book.publicationDate} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" required />
            <input type="text" name="category" value={book.category} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Book Category" required />
            <textarea name="description" value={book.description} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Description" required ></textarea>
            <input type="text" name="imageURL" value={book.imageURL} onChange={handleChange} className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Cover Image URL" required />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBook;

