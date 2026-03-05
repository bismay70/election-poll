import { useState } from "react";
import { Save, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../services/api";

const Settings = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [showCurrentPassword, setShowCurrentPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handlePasswordUpdate = async () => {
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      toast.error("Both password fields are required");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      await api.put("/auth/update-password", passwordData);

      toast.success("Password updated successfully");

      setPasswordData({
        currentPassword: "",
        newPassword: "",
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Password update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-900">
            Account Information
          </h2>

          <div>
            <label className="block text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              value={storedUser?.name || ""}
              disabled
              className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              value={storedUser?.email || ""}
              disabled
              className="mt-1 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Change Password
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Keep your account secure by updating your password regularly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showCurrentPassword ? "password" : "text"}
                placeholder="Current Password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    currentPassword: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowCurrentPassword(!showCurrentPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showNewPassword ? "password" : "text"}
                placeholder="New Password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowNewPassword(!showNewPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handlePasswordUpdate}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition disabled:opacity-60"
            >
              <Save size={16} />
              {loading ? "Updating..." : "Update Password"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;