import { Menu, Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VoterTopbar = ({ toggleSidebar }) => {
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
        <h1 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 truncate max-[384px]:hidden">
          Lok Sabha Election 2026
        </h1>
        <h1 className="font-semibold text-sm text-gray-800 hidden max-[384px]:block">
          Election 2026
        </h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 max-[338px]:gap-1 shrink-0">
        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-gray-200 shrink-0">
          <img
            src="/images/user.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-xs sm:text-sm md:text-base font-medium truncate max-w-[90px] sm:max-w-none max-[338px]:hidden">
          {name}
        </span>
        
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

export default VoterTopbar;