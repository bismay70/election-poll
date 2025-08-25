import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">Contact Us</h2>
        <p className="mb-6 text-gray-600 text-center">
          Have questions or feedback? Fill out the form below and we’ll get back to you!
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
