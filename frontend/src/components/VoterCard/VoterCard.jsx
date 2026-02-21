import React from 'react';
import { User, MapPin, Calendar, CreditCard } from 'lucide-react';

const VoterCard = ({ user }) => {

  if (!user || user.role !== 'voter') return null;

  return (
    <div className="max-w-md mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-12 h-12 bg-black"></div>
      
      <div className="bg-white border-b-4 border-black p-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
           <div className="bg-black text-white p-1">
              <CreditCard className="h-6 w-6" />
           </div>
           <div>
            <h2 className="text-xl font-black uppercase leading-none text-black">VOTER IDCARD</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Election Commission of India</p>
           </div>
        </div>
        <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>
      </div>

   
      <div className="p-6 relative">
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

        <div className="flex items-start gap-6 mb-6 relative z-10">
      
          <div className="flex-shrink-0">
            <div className="w-24 h-32 bg-gray-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {user.photo ? (
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <User className="h-8 w-8 text-black" />
                </div>
              )}
            </div>
          </div>

        
          <div className="flex-1 space-y-2">
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Name</p>
              <p className="font-black text-lg text-black uppercase leading-tight border-b-2 border-black pb-1">{user.name}</p>
            </div>

            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Voter ID</p>
              <p className="font-mono font-bold text-black bg-yellow-300 inline-block px-1 border border-black">{user.voterId}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Age</p>
                <p className="font-bold text-black">{user.age}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Gender</p>
                <p className="font-bold text-black uppercase">{user.gender}</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="mb-4 relative z-10">
          <div className="flex items-start space-x-2 border-2 border-black p-2 bg-blue-50">
            <MapPin className="h-4 w-4 text-black mt-1 flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Address</p>
              <p className="text-xs font-bold text-black leading-relaxed uppercase">{user.address}</p>
            </div>
          </div>
        </div>

     
        <div className="mb-4 relative z-10">
          <p className="text-[10px] uppercase font-black tracking-widest text-gray-500">Constituency</p>
          <p className="font-black text-black uppercase">{user.constituency}</p>
        </div>

       
        <div className="border-t-4 border-black pt-2 relative z-10">
          <div className="flex justify-between items-center text-[10px] font-bold text-black uppercase">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>Valid until: 2029</span>
            </div>
            <div className="text-right">
              <p>Issued by ECI</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="h-3 bg-gradient-to-r from-orange-500 via-white to-green-500 border-t-4 border-black"></div>
    </div>
  );
};

export default VoterCard;