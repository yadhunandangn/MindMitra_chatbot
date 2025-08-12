import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by verifying JWT in localStorage
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, [menuOpen]); // Re-check whenever menu opens

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/login");
  };

  const menuLinks = [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "Chat With Your Mitra", to: "/chat" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(255,255,255,0.95)] z-40 flex flex-col items-center
                  transition-all duration-300 ease-in-out justify-center
                  ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-black text-3xl z-50"
      >
        &#10006;
      </button>

      {/* Menu Links */}
      {menuLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`text-2xl underline font-semibold text-black my-4 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}

      {/* Login / Logout Button */}
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className={`text-2xl font-semibold text-red-600 underline my-4 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className={`text-2xl underline font-semibold text-blue-600 my-4 transform transition-transform duration-300
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          Login
        </Link>
      )}
    </div>
  );
};
