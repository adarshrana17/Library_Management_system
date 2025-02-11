import { Link } from "react-router-dom";
function Book(props){
    const {title,author,description,coverImage,rating,category,isFamous,id} = props.bookDetails;
    return (
        <div className="flex flex-col h-[450px] w-80 rounded-2xl flex-wrap justify-center p-5 gap-1 shadow-[0_5px_8px_rgba(0,0,0,0.3)] p-4 bg-white hover:scale-[1.06] overflow-hidden">
         <img src={coverImage} alt="" className="w-full h-48"/>
        <h1 className="font-bold">{title}</h1>
        <h1 className="font-semibold text-gray-500">{author}</h1>
        <h1>{description}</h1>
        <div>
        <Link to={`/book/${id}`} key={id}>
        <p className="text-blue-400 hover:underline inline">View More</p>        
        </Link>
        </div>
        </div>
    )
}
export default Book;