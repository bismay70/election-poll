import React, { useState } from 'react';

export default function NewElectionForm({ onCreate }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [constituency, setConstituency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && constituency) {
      onCreate({ name, date, constituency });
      setName('');
      setDate('');
      setConstituency('');
    }
  };

  return (
    <form
      className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto mt-12 mb-16 border border-gray-100"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-800">
         Create New Election
      </h2>

   
      <div className="mb-5">
        <label className="block font-semibold text-gray-700 mb-2">Election Name</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter election name"
          required
        />
      </div>

    
      <div className="mb-5">
        <label className="block font-semibold text-gray-700 mb-2">Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

    
      <div className="mb-8">
        <label className="block font-semibold text-gray-700 mb-2">Constituency</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
          placeholder="Enter constituency"
          required
        />
      </div>

     
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-800 to-black text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-black shadow-lg transition transform hover:scale-105"
        >
          Create Election
        </button>
      </div>
    </form>
  );
}

