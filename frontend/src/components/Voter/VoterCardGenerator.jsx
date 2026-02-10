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
        link.download = `VoterID-${details.name.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-12 mb-12 relative overflow-hidden">
      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400 border-l-4 border-b-4 border-black"></div>
      
      <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-tighter transform -rotate-1">
        <span className="bg-black text-white px-4 py-1">Voter ID</span> Generator
      </h2>

      <form className="space-y-6" onSubmit={handleGenerate}>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">Full Name</label>
                <input
                name="name"
                type="text"
                placeholder="Ex. Amit Kumar"
                value={details.name}
                onChange={handleChange}
                className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 placeholder-gray-400 rounded-none"
                required
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">Poll ID Number</label>
                 <input
                name="voterId"
                type="text"
                placeholder="Ex. ABC1234567"
                value={details.voterId}
                onChange={handleChange}
                className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 placeholder-gray-400 rounded-none"
                required
                />
            </div>
        </div>

        <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider">Constituency</label>
            <input
            name="constituency"
            type="text"
            placeholder="Ex. New Delhi Central"
            value={details.constituency}
            onChange={handleChange}
            className="w-full border-2 border-black px-4 py-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-gray-50 placeholder-gray-400 rounded-none"
            required
            />
        </div>

        <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider">Upload Photo</label>
            <input
            name="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border-2 border-black px-4 py-3 cursor-pointer bg-white file:mr-4 file:py-1 file:px-3 file:border-2 file:border-black file:text-xs file:font-bold file:bg-blue-400 file:text-white hover:file:bg-blue-500 rounded-none"
            />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white text-xl font-black uppercase tracking-widest py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4"
        >
          Generate ID Card
        </button>
      </form>

      {showCard && (
        <div className="mt-12 flex flex-col items-center animate-in fade-in slide-in-from-bottom duration-500">
          <div className="w-full h-1 bg-black mb-8 opacity-20"></div>
          
          <h3 className="text-2xl font-black mb-6 uppercase">Preview</h3>

          {/* THE CARD */}
          <div
            ref={cardRef}
            className="w-full max-w-md bg-white border-2 border-black relative overflow-hidden flex flex-col shadow-2xl"
            style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '10px 10px' }}
          >
             {/* Header */}
             <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex items-center justify-between border-b-2 border-black">
                <div className="bg-white p-1 rounded-sm">
                    <span className="text-blue-800 font-black text-lg">E</span>
                </div>
                <div className="text-right">
                    <h4 className="font-bold text-xs opacity-80 tracking-widest uppercase">Election Commission</h4>
                    <p className="font-black text-lg uppercase tracking-tight">Voter Identity Card</p>
                </div>
             </div>

             {/* Body */}
             <div className="p-6 flex gap-6 items-center relative z-10">
                 {/* Photo Area */}
                 <div className="w-28 h-32 border-2 border-black bg-gray-200 shrink-0 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {details.photo ? (
                        <img src={details.photo} alt="Voter" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center font-bold">NO PHOTO</div>
                    )}
                 </div>

                 {/* Details */}
                 <div className="flex-1 space-y-3">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Name</p>
                        <p className="font-black text-xl leading-none text-gray-900 border-b border-gray-300 pb-1">{details.name || "YOUR NAME"}</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Voter ID No</p>
                         <p className="font-bold text-base font-mono text-gray-800">{details.voterId || "XXXXXXXXXX"}</p>
                    </div>
                     <div>
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Constituency</p>
                         <p className="font-bold text-sm text-gray-800">{details.constituency || "Your Constituency"}</p>
                    </div>
                 </div>
             </div>

             {/* Footer */}
             <div className="bg-black text-white p-2 text-center text-[10px] font-bold uppercase tracking-widest">
                Official Document
             </div>
             
             {/* Watermark overlay */}
             <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
                <span className="text-9xl font-black rotate-12">INDIA</span>
             </div>
          </div>

          <button
            onClick={handleDownload}
            className="mt-8 bg-green-500 text-black px-8 py-3 font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wide flex items-center gap-2"
          >
            <span>Download Card</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </button>
        </div>
      )}
    </div>
  );
}
