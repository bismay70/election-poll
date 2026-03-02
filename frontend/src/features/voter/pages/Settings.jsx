import React from "react";

const Settings = () => {
  return (
    <div className="max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">
        Settings
      </h1>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Profile Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
          Save Changes
        </button>
      </div>

      {/* Security Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Security Settings
        </h2>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
          Update Password
        </button>
      </div>

    </div>
  );
};

export default Settings;