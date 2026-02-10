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
    color: 'bg-green-100'
  },
  {
    id: '2',
    name: 'Swasti Mishra',
    party: 'Odisha Development Congress',
    symbol: '🌸',
    constituency: 'Bhubaneswar',
    votes: 0,
    color: 'bg-pink-100'
  },
  {
    id: '3',
    name: 'Ashwani Behera',
    party: 'Independent',
    symbol: '🕊️',
    constituency: 'Rourkela',
    votes: 0,
     color: 'bg-blue-100'
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
    // Logic to update backend would go here
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-black">
      {/* Navigation Tabs */}
      <nav className="bg-white border-b-4 border-black sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex space-x-2 overflow-x-auto">
            {['home', 'vote', 'idcard'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-black text-sm uppercase tracking-widest border-x-2 border-t-0 border-b-0 transition-all ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100 border-transparent'
                }`}
              >
                {tab === 'home' && 'My Profile'}
                {tab === 'vote' && 'Cast Vote'}
                {tab === 'idcard' && 'ID Card'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
      
       {/* PROFILE TAB */}
       {activeTab === 'home' && (
        <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            {/* Header Strip */}
            <div className="bg-yellow-300 border-b-4 border-black p-4 flex justify-between items-center">
                 <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Voter Profile</h2>
                 <div className="px-3 py-1 bg-black text-white font-bold text-xs uppercase tracking-wider">verified</div>
            </div>
            
            <div className="p-8 flex flex-col md:flex-row gap-12 items-start">
                
                {/* Image Section */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-48 h-48 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative bg-blue-100">
                        <img
                            src={user.photo} 
                            alt="Profile"
                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                        />
                         {/* Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-red-500 text-white font-black text-xs px-2 py-1 border-2 border-black transform rotate-3">
                            IND CITIZEN
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoField label="Full Name" value={user.name} />
                    <InfoField label="Voter ID" value={user.voterId} highlight />
                    <InfoField label="Constituency" value={user.constituency} />
                    <InfoField label="Occupation" value={user.job || 'N/A'} />
                    <InfoField label="Age / Gender" value={`${user.age} Years / ${user.gender}`} />
                    <InfoField label="Status" value={user.maritalStatus || 'N/A'} />
                    <div className="md:col-span-2 mt-4">
                        <div className="bg-gray-100 border-2 border-black p-4 flex items-center gap-4">
                            <MapPin className="text-black" size={24} />
                            <div>
                                <p className="text-xs font-black uppercase tracking-wider text-gray-500">Registered Address</p>
                                <p className="font-bold text-lg">{user.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      
      {/* CAST VOTE TAB */}
      {activeTab === 'vote' && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          {/* Left Column: User Status */}
          <div className="lg:col-span-1">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b-4 border-black">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-2 border-black">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-black uppercase leading-none mb-1">{user.name}</h2>
                  <p className="text-sm font-bold bg-yellow-300 inline-block px-1 border border-black">{user.voterId}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-black mt-1" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-500">Constituency</p>
                    <p className="font-black text-lg">{user.constituency}</p>
                  </div>
                </div>

                <div className={`p-4 border-4 border-black ${hasVoted ? 'bg-green-100' : 'bg-red-100'}`}>
                   <div className="flex items-center gap-3 mb-2">
                        {hasVoted ? <CheckCircle className="h-6 w-6 text-black" /> : <Clock className="h-6 w-6 text-black" />}
                        <span className="font-black uppercase text-lg">{hasVoted ? 'VOTE CAST' : 'NOT VOTED'}</span>
                   </div>
                   <p className="text-sm font-bold leading-tight">
                       {hasVoted ? 'Thank you for exercising your right!' : 'Please select a candidate correctly.'}
                   </p>
                </div>
              </div>
            </div>
          </div>

         
          {/* Right Column: Ballot Paper */}
          <div className="lg:col-span-2">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
              <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
                <div className="flex items-center gap-3">
                    <Vote className="h-8 w-8 text-black" />
                    <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Official Ballot</h2>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-xs font-bold uppercase">Election 2026</p>
                    <p className="text-xs font-bold uppercase text-gray-500">Secure Voting Protocol</p>
                </div>
              </div>

              {!hasVoted ? (
                <>
                  <div className="space-y-4 mb-8">
                    {mockCandidates.map((candidate) => (
                      <div
                        key={candidate.id}
                        className={`group border-4 p-4 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 ${
                          selectedCandidate === candidate.id
                            ? 'border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'border-black bg-white text-black hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedCandidate(candidate.id)}
                      >
                         {/* Symbol Box */}
                        <div className={`w-16 h-16 flex items-center justify-center text-4xl border-2 ${selectedCandidate === candidate.id ? 'border-white bg-gray-800' : 'border-black bg-gray-100'}`}>
                            {candidate.symbol}
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h3 className="font-black text-xl uppercase leading-none mb-1">{candidate.name}</h3>
                            <p className={`text-sm font-bold uppercase tracking-wider ${selectedCandidate === candidate.id ? 'text-gray-300' : 'text-gray-500'}`}>{candidate.party}</p>
                        </div>

                        {/* Radio Check */}
                        <div className={`w-8 h-8 border-4 flex items-center justify-center ${selectedCandidate === candidate.id ? 'border-white' : 'border-black'}`}>
                             {selectedCandidate === candidate.id && <div className="w-4 h-4 bg-white" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleVote}
                    disabled={!selectedCandidate}
                    className="w-full bg-black text-white text-2xl font-black uppercase tracking-widest py-5 border-4 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none transition-all"
                  >
                    Confirm & Vote
                  </button>
                </>
              ) : (
                <div className="text-center py-16 border-4 border-dashed border-black bg-gray-50">
                  <div className="inline-block p-4 bg-green-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                       <CheckCircle className="h-12 w-12 text-black" />
                  </div>
                  <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">Vote Recorded</h3>
                  <p className="text-black font-bold max-w-md mx-auto">
                    Your vote has been successfully cast and encrypted on the blockchain. Thank you for voting!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    
      {/* ID CARD TAB */}
      {activeTab === 'idcard' && (
        <div className="flex justify-center mt-8">
          <VoterCardGenerator />
        </div>
      )}
      
      {/* CONFIRMATION MODAL */}
      {showConfirmation && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] max-w-md w-full p-8 text-center animate-in zoom-in duration-200">
                  <h3 className="text-3xl font-black text-black uppercase mb-4">Confirm Your Vote?</h3>
                  <p className="text-lg font-bold mb-8">
                      You are about to vote for <span className="bg-black text-white px-2">{mockCandidates.find(c => c.id === selectedCandidate)?.name}</span>. 
                      This action cannot be undone.
                  </p>
                  <div className="flex gap-4">
                      <button 
                        onClick={() => setShowConfirmation(false)}
                        className="flex-1 py-3 font-black uppercase border-4 border-black hover:bg-gray-100 transition-colors"
                      >
                          Cancel
                      </button>
                      <button 
                        onClick={confirmVote}
                        className="flex-1 py-3 bg-black text-white font-black uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                      >
                          Yes, Vote
                      </button>
                  </div>
              </div>
          </div>
      )}

      </div>
    </div>
  );
};

// Helper Component for Profile Info
const InfoField = ({ label, value, highlight }) => (
    <div className={`p-3 border-2 border-black ${highlight ? 'bg-yellow-100' : 'bg-white'}`}>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{label}</p>
        <p className="font-bold text-lg text-black leading-tight">{value}</p>
    </div>
);

export default VoterDashboard;
