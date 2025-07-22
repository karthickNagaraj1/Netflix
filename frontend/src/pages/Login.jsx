import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      if (res.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg"
        alt="background"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-4 left-6 z-10">
        <h1 className="text-red-600 text-4xl font-extrabold tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>NETFLIX</h1>
      </div>
      <div className="relative flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-75 p-12 rounded w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 mb-4 bg-zinc-800 border border-gray-600 rounded text-sm"
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-zinc-800 border border-gray-600 rounded text-sm"
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
            />
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded text-sm">
              Sign In
            </button>
          </form>
          <div className="mt-4">
            <button className="w-full border border-gray-500 text-white py-2 rounded font-medium text-sm hover:bg-gray-800">
              Use a sign-in code
            </button>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <div className="text-sm text-gray-400 mt-6">
            New to Netflix? <Link to="/signup" className="text-white hover:underline">Sign up now.</Link>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-tight">
            This page is protected by Google reCAPTCHA. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
