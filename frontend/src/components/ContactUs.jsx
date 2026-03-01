import React, { useState } from "react";
import axios from "axios";
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

        {/* Progress Bar */}
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

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      showCustomToast("All fields are mandatory!", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showCustomToast(
        "Please enter a valid email address (e.g. abcd@xyz.com).",
        "error"
      );
      return;
    }

    setLoading(true);

    const toastId = showCustomToast("Sending message...", "loading");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      showCustomToast(
        response.data?.message ||
          "Your message has been sent successfully!",
        "success",
        toastId
      );

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      showCustomToast(
        error.response?.data?.message ||
          "Unable to send message. Please try again later.",
        "error",
        toastId
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
          Contact Us
        </h2>

        <p className="mb-6 text-gray-600 text-center">
          Have questions or feedback? Fill out the form below and we’ll get back to you!
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <button
            disabled={loading}
            type="submit"
            className={`w-full px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;