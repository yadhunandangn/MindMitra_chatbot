import { useState } from "react";
import { CiUser, CiMail } from "react-icons/ci";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import authApi from "../Api/RestAPI";
import { useNavigate } from "react-router-dom";

export const Reg = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  // Step 1: Send OTP
  const handleSendOtp = async () => {
  if (!email) {
    alert("Please enter your email");
    return;
  }
  try {
    // ✅ Send email as JSON body
    const response = await authApi.post("/auth/send-otp", { email: email });

    alert(response.data); // "OTP sent to ..."
    setOtpSent(true);
  } catch (error) {
    console.error("Error sending OTP:", error);
    alert(error.response?.data || "Failed to send OTP");
  }
};

  // Step 2: Verify OTP & Register
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !otp) {
      alert("Please fill all fields and enter OTP");
      return;
    }

    try {
      const response = await authApi.post(`/auth/register?otp=${otp}`, {
        username,
        email,
        password,
      });
      alert("Registration success!"); // Success message with User ID
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data || "Registration failed");
    }
  };

  return (
    <div
      id="register"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="flex flex-col justify-center w-[400px] bg-sky-500/75 rounded-3xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-4">
          Register
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col space-y-6">
          {/* Username Input */}
          <div className="relative">
            <input
              className="bg-sky-400 w-full outline-none border-none rounded-3xl hover:bg-sky-300 p-2 text-black"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl" />
          </div>

          {/* Email Input */}
          <div className="relative flex">
            <input
              className="bg-sky-400 w-full outline-none border-none rounded-3xl hover:bg-sky-300 p-2 text-black"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={otpSent} // Lock email after OTP sent
            />

            {!otpSent && (
              <button
                type="button"
                className="ml-2 bg-green-600 text-white px-4 rounded-3xl hover:bg-green-700"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            )}
          </div>

          {/* OTP Input */}
          {otpSent && (
            <div className="relative">
              <input
                className="bg-sky-400 w-full outline-none border-none rounded-3xl hover:bg-sky-300 p-2 text-black"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}

          {/* Password Input */}
          <div className="relative">
            <input
              className="bg-sky-400 w-full outline-none border-none rounded-3xl hover:bg-sky-300 p-2 text-black"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <AiFillEye
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-3xl p-2 hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
