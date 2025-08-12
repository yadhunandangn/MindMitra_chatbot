import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || null);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  // ✅ Load existing session on refresh
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    if (token) {
      setAuthToken(token);
      setUserId(storedUserId);
      setUsername(storedUsername);
    }
  }, []);

  // ✅ Login function to save token, userId & username
  const login = (token, userId, username) => {
    setAuthToken(token);
    setUserId(userId);
    setUsername(username);
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", username);
  };

  // ✅ Logout function to clear session
  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUsername("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
