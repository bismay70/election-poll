import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VoterTopbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-14 md:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-4 md:px-6 shadow-sm">

      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

        {/* Hamburger */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-700"
        >
          <Menu size={20} />
        </button>

        {/* Title */}
        <h1 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 whitespace-nowrap">
          Lok Sabha Election 2026
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

        {/* Avatar */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-gray-200">
          <img
            src="/images/user.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <span className="text-xs sm:text-sm md:text-base font-medium truncate max-w-[80px] sm:max-w-none">
          {name}
        </span>

        {/* Logout */}
        <button
          onClick={logout}
          className="text-xs sm:text-sm md:text-base text-red-500 hover:text-red-600 font-medium"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default VoterTopbar;