import React, { useRef, useState } from 'react';

export default function VoterCardGenerator() {
  const [details, setDetails] = useState({ name: '', voterId: '', constituency: '', photo: '' });
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setDetails({ ...details, photo: ev.target.result });
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  const handleDownload = () => {
    const card = cardRef.current;
    if (!card) return;
    import('html2canvas').then((html2canvas) => {
      html2canvas.default(card).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'voter-card.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl mt-10 border border-pink-100">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">🎫 Voter ID Card Generator</h2>

     
      <form className="space-y-4" onSubmit={handleGenerate}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={details.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="voterId"
          type="text"
          placeholder="Voter ID"
          value={details.voterId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="constituency"
          type="text"
          placeholder="Constituency"
          value={details.constituency}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          name="photo"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-black text-white text-lg px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition transform hover:scale-105"
        >
          Generate Card
        </button>
      </form>

     
      {showCard && (
        <div className="mt-10 flex flex-col items-center">
          <div
            ref={cardRef}
            className="bg-white border border-gray-300 rounded-xl p-6 w-full max-w-sm text-center shadow-2xl transform hover:scale-105 transition"
          >
            <div className="bg-gray-100 rounded-full p-2 w-28 h-28 mx-auto mb-4 overflow-hidden shadow-md">
              <img
                src={details.photo || '/images/election-icon.png'}
                alt="Voter"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900">{details.name}</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Voter ID:</span> {details.voterId}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Constituency:</span> {details.constituency}
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
          >
            Download Card
          </button>
        </div>
      )}
    </div>
  );
}
