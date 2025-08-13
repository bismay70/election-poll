import React, { useState } from 'react';
import { User, MapPin, CheckCircle, Clock, Vote, Home } from 'lucide-react';

const mockUser = {
  name: 'Sachin Sethi',
  voterId: 'OD123456789',
  age: 21,
  gender: 'Male',
  constituency: 'Bhubaneshwar Central',
  hasVoted: false,
};


const mockCandidates = [
  {
    id: '1',
    name: 'Sanket Bhai',
    party: 'National Democratic Party',
    symbol: '👌',
    constituency: 'Mumbai North',
    votes: 0,
  },
  {
    id: '2',
    name: 'Swasti bhai',
    party: 'People\'s Alliance',
    symbol: '✋',
    constituency: 'Mumbai North',
    votes: 0,
  },
  {
    id: '3',
    name: 'bibhu ',
    party: 'Independent',
    symbol: '✍️',
    constituency: 'Mumbai North',
    votes: 0,
  },
];

export default function VoterDashboard() {
  const user = mockUser;
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(user.hasVoted);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

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
    <div className="min-h-screen bg-gray-50">
    
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('home')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'home'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('vote')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'vote'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Vote className="h-4 w-4" />
                <span>Cast Vote</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'home' ? (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900">Welcome, {user.name}</h1>
            <p className="mt-4 text-gray-600">Select the "Cast Vote" tab to participate in the election.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <p className="text-green-800 font-medium">Vote Successfully Cast!</p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Thank you for participating in the democratic process.
                    </p>
                  </div>
                )}
              </div>
            </div>

         
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Vote className="h-6 w-6 text-black" />
                  <h2 className="text-2xl font-bold text-gray-900">Cast Your Vote</h2>
                </div>

                {!hasVoted ? (
                  <>
                    <div className="space-y-4 mb-8">
                      {mockCandidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedCandidate === candidate.id
                              ? 'border-black bg-gray-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedCandidate(candidate.id)}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl">{candidate.symbol}</div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900">{candidate.name}</h3>
                              <p className="text-gray-600">{candidate.party}</p>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 ${
                                selectedCandidate === candidate.id
                                  ? 'border-black bg-black'
                                  : 'border-gray-300'
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
      </div>

     
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Your Vote</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cast your vote? This action cannot be undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmVote}
                className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Confirm Vote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
