import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const showCustomToast = (message, type = "loading", id = undefined) => {
  return toast.custom(
    () => (
      <div
        className={`relative w-80 p-4 rounded-xl shadow-xl border flex items-start gap-3
        ${type === "success" ? "bg-green-50 border-green-200" : ""}
        ${type === "error" ? "bg-red-50 border-red-200" : ""}
        ${type === "loading" ? "bg-white border-gray-200" : ""}
        `}
      >
        <div className="mt-1">
          {type === "success" && (
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">
              ✓
            </div>
          )}

          {type === "error" && (
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white text-sm font-bold">
              ✕
            </div>
          )}

          {type === "loading" && (
            <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>

        <div className="flex-1">
          <p
            className={`font-medium
            ${type === "success" ? "text-green-700" : ""}
            ${type === "error" ? "text-red-700" : ""}
            ${type === "loading" ? "text-gray-800" : ""}
            `}
          >
            {message}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200 rounded-b-xl overflow-hidden">
          <div
            className={`h-full toast-progress
            ${type === "success" ? "bg-green-500" : ""}
            ${type === "error" ? "bg-red-500" : ""}
            ${type === "loading" ? "bg-indigo-600" : ""}
            `}
          ></div>
        </div>
      </div>
    ),
    {
      id,
      duration: type === "loading" ? Infinity : 3000,
    }
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("voter");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      showCustomToast("All fields are mandatory!", "error");
      return;
    }

    if (password.length < 6) {
      showCustomToast("Password must be at least 6 characters.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showCustomToast("Passwords do not match.", "error");
      return;
    }

    setLoading(true);

    const toastId = showCustomToast("Creating account...", "loading");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        { name, email, password, role }
      );

      showCustomToast(
        response.data?.message || "Registration successful!",
        "success",
        toastId
      );

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {
      showCustomToast(
        err.response?.data?.message ||
          "Registration failed. Please try again.",
        "error",
        toastId
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-16 px-4 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Election Poll Register
        </h2>

        <div className="flex mb-2 bg-gray-100 rounded-lg overflow-hidden">
          {["voter", "admin"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2 font-semibold transition ${
                role === r
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-400 text-center mt-4 mb-4">
          N.B.: Candidates cannot self-register. Please contact Admin.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/30 transition duration-200"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/30 transition duration-200"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/30 transition duration-200"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400/30 transition duration-200"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Registering..." : `Register as ${role}`}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;