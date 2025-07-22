import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/signup", {
        email,
        password,
      });
      if (res.status === 201) {
        navigate("/");
      }
    } catch (err) {
      setError("User already exists");
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
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
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
              Sign Up
            </button>
          </form>
          <div className="text-sm text-gray-400 mt-6">
            Already a user? <Link to="/" className="text-white hover:underline">Sign in now.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}