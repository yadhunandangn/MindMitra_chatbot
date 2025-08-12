// App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { MobileMenu } from "./Components/MobileView";
import { Chat } from "./Pages/Chat";
import { Login } from "./Pages/Login";
import { Reg } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { Blog } from "./Pages/Blog";
import { AboutUs } from "./Pages/aboutus";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light"; // default
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update <html> class and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Navbar setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
