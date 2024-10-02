import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="pt-4 ">
      <div className="flex items-center justify-between ">
        <Link to="/">
          <h4 className="text-3xl font-bold text-sky-600 italic">KuŞe</h4>
        </Link>
        <div className=" items-center justify-between space-x-6 hidden md:block   ">
          <Link
            to="/About"
            className="hover:underline font-medium transition duration-300"
          >
            <div>About</div>
          </Link>
          <Link
            to="/Features"
            className="hover:underline font-medium transition duration-300"
          >
            <div>Features</div>
          </Link>
          <Link
            to="/About"
            className="hover:underline font-medium transition duration-300"
          >
            <div>Contact</div>
          </Link>
        </div>
        <button className="hidden md:block px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800">
          Login
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden font-medium text-end "
        >
          |||
        </button>
      </div>
      {isOpen && (
        <div className=" md:hidden   flex flex-col  bg-white items-center py-2  space-y-3">
          <Link
            to="/About"
            className="hover:underline font-medium transition duration-300"
          >
            <div>About</div>
          </Link>
          <Link
            to="/Features"
            className="hover:underline font-medium transition duration-300"
          >
            <div>Features</div>
          </Link>
          <Link
            to="/About"
            className="hover:underline font-medium transition duration-300"
          >
            <div>Contact</div>
          </Link>
          <button className=" px-4 py-1.5 bg-sky-600 text-amber-300 font-medium hover:bg-sky-800">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
