import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthContext"; // ✅ Import AuthContext

export const Navbar = ({ setMenuOpen }) => {
  const { authToken, username, logout } = useContext(AuthContext); // ✅ Use global context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ Clears token, userId & username
    navigate("/login");
  };

  return (
    <nav
      id="navbar"
      className="fixed w-full top-0 z-30 backdrop-blur-lg bg-white border-b border-gray-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-black text-lg">
            <Link to="/"> <img src="/Logo.png" alt="MindMitra" className="w-80 sm:w-56 md:w-50 h-auto object-contain" /></Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="w-7 h-5 cursor-pointer z-50 md:hidden text-black"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              className="font-mono   text-2xl  text-black"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-mono  text-2xl  text-black"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="font-mono  text-2xl  text-black"
              to="/chat"
            >
              Chat
            </Link>
            <Link
              className="font-mono  text-2xl  text-black"
              to="/about"
            >
              About Us
            </Link>


            {authToken ? (
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">
                  Welcome, {username || "User"}!
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-400 px-4 py-1 text-2xl rounded-xl font-bold text-black hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                className="bg-blue-300 px-4 py-1 rounded-xl text-2xl  text-black hover:bg-blue-600 hover:text-white transition"
                to="/login"
              >
                Start Free Trial
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
