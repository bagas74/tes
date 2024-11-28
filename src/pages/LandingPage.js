import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Steam-Like</h1>
      <p className="text-xl mb-6">
        Discover amazing games and join the community!
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 px-6 py-3 rounded text-white font-bold hover:bg-blue-500"
        >
          Login
        </Link>
        <Link
          to="/"
          className="bg-gray-700 px-6 py-3 rounded text-white font-bold hover:bg-gray-600"
        >
          Browse Games
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
