import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData); // Simpan data user
  const handleLogout = () => setUser(null); // Hapus data user

  return (
    <Router>
      {user && <Navbar role={user.role} onLogout={handleLogout} />}
      <Routes>
        <Route path="/Landing" element={<LandingPage />} />
        <Route
          path="/games"
          element={user ? <HomePage /> : <Navigate to="/Landing" />}
        />
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? <AdminPage /> : <Navigate to="/Landing" />
          }
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
