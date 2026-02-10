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
      className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-lg mx-auto mt-12 mb-16 relative"
      onSubmit={handleSubmit}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-blue-400 border-l-4 border-b-4 border-black"></div>

      <h2 className="text-3xl font-black mb-8 text-center text-black uppercase tracking-tighter">
         Create New Election
      </h2>

   
      <div className="mb-6">
        <label className="block font-bold text-black uppercase tracking-wide text-xs mb-2">Election Name</label>
        <input
          type="text"
          className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 placeholder-gray-400 rounded-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ENTER ELECTION NAME"
          required
        />
      </div>

    
      <div className="mb-6">
        <label className="block font-bold text-black uppercase tracking-wide text-xs mb-2">Date</label>
        <input
          type="date"
          className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 rounded-none"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

    
      <div className="mb-8">
        <label className="block font-bold text-black uppercase tracking-wide text-xs mb-2">Constituency</label>
        <input
          type="text"
          className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 placeholder-gray-400 rounded-none"
          value={constituency}
          onChange={(e) => setConstituency(e.target.value)}
          placeholder="ENTER CONSTITUENCY"
          required
        />
      </div>

     
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-black text-white px-8 py-4 font-black uppercase tracking-widest border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform active:translate-y-1"
        >
          Create Election
        </button>
      </div>
    </form>
  );
}

