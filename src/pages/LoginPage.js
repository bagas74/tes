import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi login (contoh sederhana)
    let role;
    if (username === "admin" && password === "12345") {
      role = "admin";
    } else if (username === "user" && password === "1234") {
      role = "user";
    } else {
      alert("Invalid username or password!");
      return;
    }

    // Login berhasil, simpan data user
    onLogin({ username, role });

    // Redirect berdasarkan role
    if (role === "admin") {
      navigate("/admin"); // Arahkan ke halaman admin
    } else {
      navigate("/games"); // Arahkan ke halaman user (home user)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 rounded bg-gray-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 w-full p-2 rounded hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
