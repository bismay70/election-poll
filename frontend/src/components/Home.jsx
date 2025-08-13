
import React from 'react';
import { Laptop, Users, Award, Database } from 'lucide-react';

export default function Home() {

  return (
    <main className="relative bg-white overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg')`
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-white/70 z-10" />
      </div>

   
      <div className="relative z-20 bg-gray-100/90 backdrop-blur-sm py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 text-sm font-medium text-gray-700">
          <span className="flex items-center space-x-2 py-2"><Laptop className="h-4 w-4" /><span>eVoting</span></span>
          <span className="flex items-center space-x-2 py-2"><Users className="h-4 w-4" /><span>eAGM</span></span>
          <span className="flex items-center space-x-2 py-2"><Award className="h-4 w-4" /><span>eAuction</span></span>
          <span className="flex items-center space-x-2 py-2"><Database className="h-4 w-4" /><span>eDataRoom</span></span>
        </div>
      </div>

 
      <div className="relative z-20 py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">ONLINE ELECTION PLATFORM</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              ElectSecure is the best online voting website and app which enables you to create and participate in online elections.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition text-lg">
              VOTE
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}
