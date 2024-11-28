import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ role, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Mengubah state saat tombol dropdown diklik
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/games" className="text-2xl font-bold">
          Steam-Like
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          >
            {role === "admin" ? "Admin Menu" : "User Menu"}
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded shadow-lg">
              {role === "admin" ? (
                <>
                  <Link
                    to="/admin"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)} // Tutup saat di-klik
                  >
                    Admin Panel
                  </Link>
                  <Link
                    to="/reports"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sales Report
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                </>
              )}
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 hover:bg-red-600 text-red-400"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
