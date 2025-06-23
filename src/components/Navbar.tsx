import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";


export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">🎓 Student Portal</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/dashboard">Dashboard</Link>
        {user && <button onClick={handleLogout}>Logout</button>}
        {user && <span className="font-semibold">{user.name}</span>}
      
        <button
          onClick={toggleDarkMode}
          className="ml-2 text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
