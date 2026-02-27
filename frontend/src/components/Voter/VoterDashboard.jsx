import React, { useEffect, useState } from "react";
import OverviewCard from "./elements/OverviewCard";
import CandidateCard from "./elements/CandidateCard";
import VoteModal from "./elements/VoteModal";
import MiniAnalytics from "./elements/MiniAnalytics";

import {
  getVoterCandidates,
  getVoterStats,
  submitVote,
} from "./elements/voterApi";

const VoterDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(""); 

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchData = async () => {
    try {
      const candidatesRes = await getVoterCandidates(config);
      const statsRes = await getVoterStats(config);

      setCandidates(candidatesRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error("Error fetching voter data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmVote = async () => {
    if (!selectedCandidate) return;

    try {
      setSubmitting(true);
      await submitVote(selectedCandidate._id, config);
      setSelectedCandidate(null);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || "Error submitting vote");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!stats.deadline) return;

    const interval = setInterval(() => {
      const diff = new Date(stats.deadline) - new Date();

      if (diff <= 0) {
        setTimeLeft("Election Closed");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${hours}h ${minutes}m remaining`);
    }, 1000);

    return () => clearInterval(interval);
  }, [stats.deadline]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500 animate-pulse">
          Loading election data...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          {timeLeft && (
            <p className="text-sm text-indigo-600 mb-2">
              {timeLeft}
            </p>
          )}

          <h1 className="text-2xl font-bold">
            Welcome back,{" "}
            <span className="text-indigo-600">{name}</span>!
          </h1>

          <p className="text-gray-600 mt-2">
            Cast your vote securely and help shape the future.
          </p>
        </div>

        <div>
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              stats.hasVoted
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {stats.hasVoted ? "Vote Submitted" : "Pending Vote"}
          </span>
        </div>
      </div>


      {stats.hasVoted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Thank you for participating in the democratic process!
          Your vote has been securely recorded.
        </div>
      )}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <OverviewCard
          label="Total Registered Voters"
          value={stats.totalVoters}
        />
        <OverviewCard
          label="Votes Cast"
          value={stats.totalVotes}
        />
        <OverviewCard
          label="Voter Turnout"
          value={`${stats.turnout}%`}
        />
      </div>

      <MiniAnalytics
      totalVoters={stats.totalVoters || 0}
      totalVotes={stats.totalVotes || 0}
      />

      <div className="mb-12">
        <p className="text-sm text-gray-500 mb-2">
          Turnout Progress
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-indigo-600 h-3 rounded-full transition-all"
            style={{ width: `${stats.turnout || 0}%` }}
          />
        </div>
      </div>
      
      <h2 className="text-xl font-semibold mb-6">
        Candidates in {stats.constituency || "Your Constituency"}
      </h2>

      {candidates.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow-sm text-center text-gray-500">
          No candidates available for this constituency.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate._id}
              candidate={candidate}
              hasVoted={stats.hasVoted}
              showVoteButton={false}
            />
          ))}
        </div>
      )}

      {selectedCandidate && (
        <VoteModal
          candidate={selectedCandidate}
          onConfirm={handleConfirmVote}
          onClose={() => setSelectedCandidate(null)}
          loading={submitting}
        />
      )}
    </>
  );
};

export default VoterDashboard;