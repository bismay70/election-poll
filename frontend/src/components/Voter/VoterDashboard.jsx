import React, { useState } from 'react';
import VoterCardGenerator from './VoterCardGenerator';
import { User, MapPin, CheckCircle, Clock, Vote } from 'lucide-react';


const mockCandidates = [
  {
    id: '1',
    name: 'Bibhu Prasad',
    party: 'Progressive Odisha Party',
    symbol: '🌾',
    constituency: 'Bhubaneswar',
    votes: 0,
  },
  {
    id: '2',
    name: 'Swasti Mishra',
    party: 'Odisha Development Congress',
    symbol: '🌸',
    constituency: 'Bhubaneswar',
    votes: 0,
  },
  {
    id: '3',
    name: 'Ashwani Behera',
    party: 'Independent',
    symbol: '🕊️',
    constituency: 'Rourkela',
    votes: 0,
  },
];

const VoterDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(user?.hasVoted || false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleVote = () => {
    if (selectedCandidate && !hasVoted) {
      setShowConfirmation(true);
    }
  };

  const confirmVote = () => {
    setHasVoted(true);
    setShowConfirmation(false);
   
  };

  return (
    <div>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['home', 'vote', 'idcard'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 border-b-4 font-semibold text-md transition-all ${
                  activeTab === tab
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-400'
                }`}
              >
                {tab === 'home' && 'Home'}
                {tab === 'vote' && 'Cast Vote'}
                {tab === 'idcard' && 'Generate Voter ID'}
              </button>
            ))}
          </div>
        </div>
      </nav>

     
      {activeTab === 'home' && (
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-blue-100 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full z-0 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-100 rounded-tr-full z-0 opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                
                {/* Image Section */}
                <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-20">
                        <img
                            src={user.photo} 
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative Circle behind */}
                    <div className="absolute top-4 -left-4 w-64 h-64 rounded-full bg-blue-100 -z-10 blur-xl opacity-60"></div>
                     {/* Striped Pattern */}
                     <div className="absolute -bottom-6 -right-6 w-32 h-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQYV2NkYGAwYmBg0GBgYGiAMwgwMjNamJmXT2VkZKwjwZOMDIwWKGCkaqCFmXn5VEZGxjoSPAkAzOQRCtcVKu4AAAAASUVORK5CYII=')] opacity-20 transform -rotate-12 z-0"></div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                    <div className="mb-6 relative">
                        <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase mb-2" style={{fontFamily: 'Impact, sans-serif'}}>
                            ABOUT <span className="text-blue-600">VOTER</span>
                        </h2>
                        <div className="w-24 h-2 bg-black mb-6"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.name}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Voter ID</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.voterId}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Region / Constituency</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.constituency}</p>
                        </div>
                         <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1Truncate">{user.address}</p>
                        </div>
                         <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Occupation</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.job || 'N/A'}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Marital Status</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.maritalStatus || 'N/A'}</p>
                        </div>
                         <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Age / Gender</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.age} Years / {user.gender}</p>
                        </div>
                         <div className="space-y-1">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                            <p className="font-bold text-lg border-b border-pink-100 pb-1">{user.phone || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      
      {activeTab === 'vote' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600">Voter ID: {user.voterId}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Constituency</p>
                    <p className="font-medium">{user.constituency}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {hasVoted ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-orange-500" />
                  )}
                  <div>
                    <p className="text-sm text-gray-600">Voting Status</p>
                    <p className={`font-medium ${hasVoted ? 'text-green-600' : 'text-orange-600'}`}>
                      {hasVoted ? 'Vote Cast' : 'Not Voted'}
                    </p>
                  </div>
                </div>
              </div>
              {hasVoted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-green-800 font-semibold">Vote Successfully Cast!</p>
                </div>
              )}
            </div>
          </div>

         
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Vote className="h-6 w-6 text-black" />
                <h2 className="text-2xl font-bold text-gray-900">Select Your Candidate</h2>
              </div>
              {!hasVoted ? (
                <>
                  <div className="space-y-4 mb-8">
                    {mockCandidates.map((candidate) => (
                      <div
                        key={candidate.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all transform hover:scale-105 ${
                          selectedCandidate === candidate.id
                            ? 'border-black bg-gray-50 shadow-md'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedCandidate(candidate.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{candidate.symbol}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg">{candidate.name}</h3>
                            <p className="text-gray-600">{candidate.party}</p>
                            <p className="text-gray-500 text-sm">{candidate.constituency}</p>
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full border-2 ${
                              selectedCandidate === candidate.id ? 'border-black bg-black' : 'border-gray-300'
                            }`}
                          >
                            {selectedCandidate === candidate.id && (
                              <div className="w-2 h-2 bg-white rounded-full m-1" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleVote}
                    disabled={!selectedCandidate}
                    className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Cast Vote
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vote Already Cast</h3>
                  <p className="text-gray-600">
                    You have successfully participated in this election. Thank you for your civic duty!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    
      {activeTab === 'idcard' && (
        <div className="flex justify-center mt-8">
          <VoterCardGenerator />
        </div>
      )}
    </div>
  );
};

export default VoterDashboard;
