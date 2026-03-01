import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isDashboard) return null;

  const handleLogout = () => {
    localStorage.clear();
    setIsMobileMenuOpen(false);
    navigate("/login");
  };
  const navLinkStyle =
    "px-3 py-2 rounded-md transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-indigo-600";

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Vote className="h-8 w-8 text-indigo-600" />
            <span className="font-extrabold text-2xl text-gray-900">
              ElectPoll
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4 text-sm font-semibold">

            <Link to="/" className={navLinkStyle}>
              Home
            </Link>

            {!token && (
              <>
                <Link to="/login" className={navLinkStyle}>
                  Login
                </Link>
                <Link to="/register" className={navLinkStyle}>
                  Register
                </Link>
              </>
            )}

            {token && role === "voter" && (
              <Link to="/voter" className={navLinkStyle}>
                Dashboard
              </Link>
            )}

            {token && role === "candidate" && (
              <Link to="/candidate" className={navLinkStyle}>
                My Votes
              </Link>
            )}

            {token && role === "admin" && (
              <>
                <Link to="/admin" className={navLinkStyle}>
                  Admin Panel
                </Link>
                <Link to="/new-election" className={navLinkStyle}>
                  New Election
                </Link>
              </>
            )}

            {token && (
              <button
                onClick={handleLogout}
                className="bg-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "translate-x-0 shadow-2xl"
              : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col p-6 text-sm font-semibold">

          <div className="flex items-center justify-between mb-3 px-1">        
            <span className="text-base font-semibold text-gray-700">
              Menu
            </span>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition"
            >
              <X size={20} />
            </button>

          </div>
          <div className="mt-0 pt-8 border-t border-gray-200"></div>
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                Home
              </Link>

              {!token && (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                    Register
                  </Link>
                </>
              )}

              {token && role === "voter" && (
                <Link to="/voter" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                  Dashboard
                </Link>
              )}

              {token && (
                <button
                  onClick={handleLogout}
                  className="bg-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 mt-2"
                >
                  Logout
                </button>
              )}
            </div>
            <div className="mt-auto pt-8 border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <Vote className="h-6 w-6 text-indigo-600" />
                <span className="font-extrabold text-lg text-gray-900">
                  ElectPoll
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}