import React from 'react';
import { useNavigate } from 'react-router-dom';

import ClientReviews from './ClientReviews';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-yellow-50 border-b-4 border-black">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center py-12 md:py-0 z-10">
             <div className="bg-black text-white inline-block px-4 py-2 mb-6 transform -rotate-2 border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] w-fit">
                <span className="font-black uppercase tracking-widest text-sm">Official Voting Portal</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6 leading-[0.9]">
                 <span className="block">ONLINE</span> 
                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800" style={{WebkitTextStroke: '2px black'}}>ELECTION</span> 
                 <span className="block">PLATFORM</span>
             </h1>
             <p className="text-xl text-black font-bold mb-8 max-w-lg leading-relaxed border-l-4 border-black pl-4">
               India’s most trusted online voting solution, enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere.
             </p>
             <div>
                <button 
                    onClick={() => navigate('/login')}
                    className="group relative inline-flex justify-center py-4 px-12 border-2 border-black text-lg font-black uppercase tracking-widest text-white bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-black transition-all focus:outline-none"
                >
                Vote Now
                </button>
             </div>
        </div>

        {/* Right Image with Shape */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] relative border-l-4 border-black bg-blue-200">
             <img 
                 src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg"
                 alt="Voting" 
                 className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
             />
             <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
             {/* Decorative Box */}
             <div className="absolute bottom-10 left-10 bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs transform rotate-2">
                <p className="font-black text-black uppercase text-xl loading-tight">Secure. Transparent. Fast.</p>
             </div>
        </div>

      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">Why Choose Us?</h2>
                <div className="w-24 h-2 bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center group">
                    <div className="relative w-full aspect-square mb-6 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-blue-100 overflow-hidden">
                         <img 
                            src="/images/voters.png" 
                            alt="Voter Participation" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <h3 className="text-2xl font-black uppercase text-black mb-2">Maximum Participation</h3>
                </div>

                {/* Item 2 - Text Block */}
                 <div className="flex flex-col justify-center p-8 border-4 border-black bg-yellow-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-full transform md:-rotate-2 transition-all hover:rotate-0 hover:scale-105">
                    <h3 className="text-3xl font-black mb-4 uppercase leading-none">Secure & Transparent</h3>
                    <p className="text-black font-bold text-lg leading-relaxed">
                        Our platform provides real-time results, voter authentication, and an easy-to-use interface designed to make digital elections simple and reliable.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center group">
                   <div className="w-full aspect-square border-4 border-black bg-red-100 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 mb-6 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <img 
                            src="/images/votes_count.png" 
                            alt="Live Results" 
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                   </div>
                   <div className="w-full border-4 border-black p-4 bg-black text-white text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]">
                       <h3 className="font-black text-xl uppercase">Real-time Results</h3>
                       <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mt-1">Instant updates</p>
                   </div>
                </div>

            </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ClientReviews />

    </div>
  );
}
