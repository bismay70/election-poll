import React, { useState } from "react";
import { Menu, X, Vote } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isDashboard =
    location.pathname.startsWith("/voter") ||
    location.pathname.startsWith("/candidate") ||
    location.pathname.startsWith("/admin");

  // ✅ Hide header completely on dashboard routes
  if (isDashboard) return null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <Vote className="h-8 w-8 text-indigo-600" />
            <span className="font-extrabold text-2xl text-gray-900">
              ElectPoll
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">

            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>

            {!token && (
              <>
                <Link to="/login" className="hover:text-indigo-600 transition">
                  Login
                </Link>
                <Link to="/register" className="hover:text-indigo-600 transition">
                  Register
                </Link>
              </>
            )}

            {token && role === "voter" && (
              <Link to="/voter" className="hover:text-indigo-600 transition">
                Dashboard
              </Link>
            )}

            {token && role === "candidate" && (
              <Link to="/candidate" className="hover:text-indigo-600 transition">
                My Votes
              </Link>
            )}

            {token && role === "admin" && (
              <>
                <Link to="/admin" className="hover:text-indigo-600 transition">
                  Admin Panel
                </Link>
                <Link to="/new-election" className="hover:text-indigo-600 transition">
                  New Election
                </Link>
              </>
            )}

            {token && (
              <button
                onClick={handleLogout}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 text-sm font-medium">

              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>

              {!token && (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </>
              )}

              {token && (
                <button
                  onClick={handleLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}