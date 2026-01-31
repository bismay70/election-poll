import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const response = await axios.post('/api/contact', formData, {
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
      setFormData({ name: '', email: '', message: '' });
      setSuccess(true);
    } else {
      console.error('Unexpected response:', response);
    }
  } catch (error) {
    console.error('Submit failed:', error.response?.data || error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">Contact Us</h2>
        {success && (
        <div className="mb-4 rounded-lg bg-green-100 text-green-800 px-4 py-3 text-center">
          ✅ Your message has been sent successfully!
        </div>
        )}
        <p className="mb-6 text-gray-600 text-center">
          Have questions or feedback? Fill out the form below and we’ll get back to you!
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
          name="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none text-gray-800"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
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

export default MyForm;