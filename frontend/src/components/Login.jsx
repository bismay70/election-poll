import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("voter");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError("All fields are mandatory!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );

      localStorage.setItem("name", response.data.name);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      setSuccess(true);

      setTimeout(() => {
        navigate(`/${response.data.role}`);
      }, 1200);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-16 px-4 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Election Poll Login
        </h2>

        {success && (
          <div className="mb-4 rounded-lg bg-green-100 text-green-800 px-4 py-3 text-center">
            Login successful!
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-800 px-4 py-3 text-center">
            {error}
          </div>
        )}

        <div className="flex mb-2 bg-gray-100 rounded-lg overflow-hidden">
          {["voter", "candidate", "admin"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRole(r)}
              className={`flex-1 py-2 font-semibold transition ${
                selectedRole === r
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not registered yet?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;