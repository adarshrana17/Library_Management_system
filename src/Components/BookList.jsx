import Book from "./Book";

function BookList({ bookData }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {bookData.map((book) => (
        <Book key={book.id} bookDetails={book} />
      ))}
    </div>
  );
}

export default BookList;


