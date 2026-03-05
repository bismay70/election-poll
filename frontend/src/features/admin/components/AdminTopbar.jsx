import { Menu, Home, LogOut, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminTopbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-14 md:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-4 md:px-6 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-700 shrink-0"
        >
          <Menu size={20} />
        </button>

        <h1 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 truncate max-[384px]:hidden flex items-center gap-2">
          <ShieldCheck className="text-indigo-600 w-4 h-4 sm:w-5 sm:h-5" />
          Admin Panel
        </h1>

        <h1 className="font-semibold text-sm text-gray-800 hidden max-[384px]:block">
          Admin
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            onClick={() => navigate("/admin/settings")}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              src="/images/user.jpg"
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-xs sm:text-sm md:text-base font-normal truncate max-w-[90px] sm:max-w-none max-[338px]:hidden">
            {name}
          </span>
        </div>

        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-700 hover:text-indigo-600 transition shrink-0"
        >
          <span className="hidden sm:inline text-sm md:text-base font-medium">
            Home
          </span>
          <Home className="sm:hidden w-5 h-5" />
        </button>

        <button
          onClick={logout}
          className="flex items-center text-red-500 hover:text-red-600 transition shrink-0"
        >
          <span className="hidden sm:inline text-sm md:text-base font-medium">
            Logout
          </span>
          <LogOut className="sm:hidden w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default AdminTopbar;