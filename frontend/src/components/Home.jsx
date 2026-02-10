import React from 'react';
import { useNavigate } from 'react-router-dom';

import ClientReviews from './ClientReviews';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 relative z-10">
          <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              India’s most trusted online voting solution
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere. Experience the future of voting with 100% transparency.
            </p>
            <button 
                onClick={() => navigate('/login')}
                className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none"
            >
              Vote Now
            </button>
          </div>
        </div>

        {/* Right Image Content & Yellow Background */}
        <div className="md:w-1/2 relative">
          {/* Blue Background Block */}
          <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100 -z-10 rounded-sm transform translate-x-4 -translate-y-4"></div>
          
          <div className="relative z-10">
            <img 
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg"
              alt="Voting Process" 
              className="w-full h-auto object-cover shadow-xl border-2 border-black"
            />
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
