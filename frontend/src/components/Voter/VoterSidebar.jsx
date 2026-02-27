import { Home, Vote, BarChart3, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VoterSidebar = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white"
        : "hover:bg-slate-700 text-slate-300"
    }`;

  return (
    <div className="w-64 bg-slate-800 text-slate-200 min-h-screen flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-bold border-b border-slate-700">
          ElectPoll
        </div>

        <nav className="mt-6 space-y-2 px-4">
          <NavLink to="/voter" end className={linkClass}>
            <Home size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/voter/cast" className={linkClass}>
            <Vote size={18} />
            Cast Vote
          </NavLink>

          <NavLink to="/voter/status" className={linkClass}>
            <BarChart3 size={18} />
            My Status
          </NavLink>

          <Link
            to="settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            <Settings size={18} />
            Settings
          </Link>
        </nav>
      </div>

      
    </div>
  );
};

export default VoterSidebar;