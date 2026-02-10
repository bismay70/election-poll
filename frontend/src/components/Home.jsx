import React from 'react';
import { useNavigate } from 'react-router-dom';

import ClientReviews from './ClientReviews';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center py-12 md:py-0 z-10">
             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                 <span className="text-orange-500 block">ONLINE</span> 
                 <span className="text-blue-900 block">ELECTION</span> 
                 <span className="text-green-600 block">PLATFORM</span>
             </h1>
             <p className="text-lg text-gray-600 font-medium mb-8 max-w-lg leading-relaxed">
               India’s most trusted online voting solution, enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere.
             </p>
             <div>
                <button 
                    onClick={() => navigate('/login')}
                    className="group relative inline-flex justify-center py-3 px-10 border border-transparent text-sm font-bold rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 shadow-lg transform transition hover:scale-105"
                >
                Vote Now
                </button>
             </div>
        </div>

        {/* Right Image with Shape */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
             <div className="absolute inset-0 bg-blue-50 md:rounded-tl-[100px] md:rounded-bl-[50px] overflow-hidden">
                <img 
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg"
                    alt="Voting" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
             </div>
        </div>

      </section>

      {/* Features Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Item 1 */}
                <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square mb-6 overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                         <img 
                            src="/images/voters.png" 
                            alt="Voter Participation" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Item 2 - Text Block */}
                 <div className="flex flex-col justify-center p-6 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] h-fit self-center">
                    <h3 className="text-xl font-bold mb-3">Secure & Transparent</h3>
                    <p className="text-gray-600 text-sm">
                        Our platform provides real-time results, voter authentication, and an easy-to-use interface designed to make digital elections simple and reliable.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center">
                   <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-blue-400 flex items-center justify-center p-2 mb-4">
                        <img 
                            src="/images/votes_count.png" 
                            alt="Live Results" 
                            className="w-full h-full object-cover rounded-full"
                        />
                   </div>
                   <div className="border-2 border-black p-4 mt-4 text-center max-w-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                       <h3 className="font-bold mb-2">Real-time Results</h3>
                       <p className="text-xs text-gray-600">Track election progress with instant updates.</p>
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
