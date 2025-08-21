import React from 'react';

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen flex flex-col justify-center animate-fade-in">
    
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg')`,
          }}
        />
       
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-white/70 z-10" />
      </div>

    
      <div className="relative z-20 flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          
      
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <img
              src="/images/Screenshot 2025-08-16 131130.png"
              alt="Election Icon"
              className="w-20 h-20 rounded shadow-xl animate-fade-in"
            />
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent animate-pulse"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              ONLINE ELECTION PLATFORM
            </h1>
          </div>

        
          <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
            <span className="text-black font-extrabold">ElectPoll</span> is India’s most trusted
            online voting solution, enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere.
          </p>

         
          <p className="mt-4 text-md sm:text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0">
            Our platform provides real-time results, voter authentication, and an easy-to-use
            interface designed to make digital elections simple and reliable. Experience the future
            of voting with 100% transparency and security.
          </p>

         
          <div className="mt-8">
            <button className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition text-xl shadow-lg">
              VOTE NOW
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
