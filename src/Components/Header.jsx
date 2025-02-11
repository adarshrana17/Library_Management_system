import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 w-full shadow-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-center">Library Management System</h1>
      
      <nav className="flex justify-center items-center list-none gap-12 py-4 text-white font-semibold text-lg">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b-2 border-blue-500"
              : "hover:text-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out"
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/browsebook"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b-2 border-blue-500"
              : "hover:text-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out"
          }
        >
          <li>Browse Book</li>
        </NavLink>
        <NavLink
          to="/addbook"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 border-b-2 border-blue-500"
              : "hover:text-yellow-500 hover:scale-105 transition-transform duration-300 ease-in-out"
          }
        >
          <li>Add Book</li>
        </NavLink>
      </nav>
      </div>
    </>
  );
}

export default Header;

