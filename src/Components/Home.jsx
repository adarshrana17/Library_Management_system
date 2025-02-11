import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-8"
        style={{
          backgroundImage: "url('../public/images/library.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 z-0"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-center drop-shadow-lg leading-tight z-10 
          bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
          WELCOME TO THE LIBRARY
        </h1>
        <p className="text-xl font-bold mt-6 md:text-2xl opacity-90 text-center max-w-2xl z-10 
          bg-gradient-to-r from-teal-800 to-blue-800 text-transparent bg-clip-text">
          Discover, Read, and Manage Books with Ease
        </p>
        
        <Link to="/browsebook">
          <button className="mt-8 px-8 py-4 text-lg font-medium bg-blue-500 text-white rounded-lg shadow-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 z-10">
            Explore Library
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;

