import { Link } from "react-router-dom";
import { Books } from "../utlis/mockdata";
import Book from "./Book";
function FamousBookList(){
    return (
        <>

        <h1 className="text-4xl text-center w-full m-t5">Some of Famous Books</h1>
        <div className="flex flex-wrap gap-5 m-5 justify-center">
        {Books.map((book) => {
             return (
                book.isFamous && (
                    <Book bookDetails={book} key={book.id} />
                )
            )
             })}
        </div>
        </>
    )
}
export default FamousBookList;


