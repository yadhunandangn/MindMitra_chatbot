import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import authApi from "../Api/RestAPI";
import { AuthContext } from "./AuthContext"; // ✅ Import AuthContext

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext); // ✅ Global login function from context

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedRemember = localStorage.getItem("rememberMe") === "true";
    if (savedRemember && savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await authApi.post("/auth/login", { email, password });

      if (response.status === 200) {
        const { token, userId, username } = response.data; // ✅ Ensure backend sends username

        // ✅ Use AuthContext to save session globally
        login(token, userId, username);

        // ✅ Remember Me handling
        if (rememberMe) {
          localStorage.setItem("userEmail", email);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("userEmail");
          localStorage.setItem("rememberMe", "false");
        }

        navigate("/chat"); // ✅ Redirect to chat/dashboard
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <div
      id="login"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="flex justify-center min-w-xl bg-sky-500/75 rounded-4xl">
        <div className="flex flex-col p-4 space-y-1.5">
          <h1 className="text-3xl font-bold text-blue-600">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center space-y-6 py-2"
          >
            {/* Email Input */}
            <div className="relative">
              <input
                className="bg-sky-400 min-w-[270px] pl-2 outline-transparent border-transparent
                    rounded-4xl focus:outline-none hover:bg-sky-300 p-2 text-black"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <HiOutlineMailOpen className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 text-xl" />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                className="bg-sky-400 min-w-[270px] pl-2 outline-transparent border-transparent
                    rounded-4xl focus:outline-none hover:bg-sky-300 p-2 text-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="relative space-x-10">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />{" "}
                Remember me
              </label>
              <a className="cursor-pointer">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-700 p-3 text-xl rounded-4xl hover:bg-blue-600 text-white"
            >
              Login
            </button>
          </form>

          <div>
            <Link to="/register" className="text-blue-800 hover:underline">
              New User / Not Registered?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
