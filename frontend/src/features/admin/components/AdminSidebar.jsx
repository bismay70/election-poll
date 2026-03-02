import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ShieldCheck
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-700 text-white"
        : "hover:bg-slate-700 text-slate-300"
    }`;

  return (
    <div className="w-64 bg-slate-800 text-slate-200 min-h-screen flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-bold border-b border-slate-700 flex items-center gap-2">
          ElectPoll
        </div>

        <nav className="mt-6 space-y-2 px-4">

          <NavLink to="/admin" end className={linkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/admin/candidates" className={linkClass}>
            <Users size={18} />
            Candidates
          </NavLink>

          <NavLink to="/admin/results" className={linkClass}>
            <BarChart3 size={18} />
            Results
          </NavLink>

          <NavLink to="/admin/settings" className={linkClass}>
            <Settings size={18} />
            Settings
          </NavLink>

        </nav>
      </div>

    </div>
  );
};

export default AdminSidebar;