import React from 'react';
import { User, MapPin, Calendar, CreditCard } from 'lucide-react';

const VoterCard = ({ user }) => {

  if (!user || user.role !== 'voter') return null;

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden">
    
      <div className="bg-black text-white px-6 py-4">
        <div className="flex items-center space-x-3">
          <CreditCard className="h-6 w-6" />
          <div>
            <h2 className="text-lg font-bold">VOTER IDENTITY CARD</h2>
            <p className="text-sm text-gray-300">Election Commission of India</p>
          </div>
        </div>
      </div>

   
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-6">
      
          <div className="flex-shrink-0">
            <div className="w-20 h-24 bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden">
              {user.photo ? (
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          </div>

        
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
              <p className="font-bold text-gray-900">{user.name}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Voter ID</p>
              <p className="font-mono font-bold text-black">{user.voterId}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Age</p>
                <p className="font-medium text-gray-900">{user.age}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Gender</p>
                <p className="font-medium text-gray-900">{user.gender}</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="mb-4">
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
              <p className="text-sm text-gray-700 leading-relaxed">{user.address}</p>
            </div>
          </div>
        </div>

     
        <div className="mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Constituency</p>
          <p className="font-medium text-gray-900">{user.constituency}</p>
        </div>

       
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center text-xs text-gray-500">
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

     
      <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
    </div>
  );
};

export default VoterCard;
