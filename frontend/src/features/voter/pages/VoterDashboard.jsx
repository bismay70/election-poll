import React, { useEffect, useState } from "react";
import OverviewCard from "../components/OverviewCard";
import CandidateCard from "../components/CandidateCard";
import VoteModal from "../components/VoteModal";
import MiniAnalytics from "../components/MiniAnalytics";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {getVoterCandidates, getVoterStats, submitVote,} from "../voterApi";

const VoterDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

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
      toast.error("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back,{" "}
            <span className="text-indigo-600">{name}</span>!
          </h1>

          <p className="text-gray-600 mt-2">
            {stats.hasVoted
              ? "Thank you for participating in the democratic process."
              : "Cast your vote in the ongoing elections and make your voice heard!"}
          </p>
        </div>

        <div>
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 
              ${
                stats.hasVoted
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
          >
            {stats.hasVoted ? "Vote Submitted" : "Pending Vote"}
          </span>
        </div>
      </div>

      {stats.hasVoted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Your vote has been securely recorded!
          {stats.votedAt && (
          <p className="text-sm mt-2">
            Voted on:{" "}
            <span className="font-medium">
              {new Date(stats.votedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              at{" "}
              {new Date(stats.votedAt).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
        )}
      </div>
    )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <OverviewCard
          label="Total Registered Voters"
          value={stats.totalVoters || 0}
        />
        <OverviewCard
          label="Votes Cast"
          value={stats.totalVotes || 0}
        />
        <OverviewCard
          label="Voter Turnout"
          value={`${stats.turnout || 0}%`}
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
            className="bg-indigo-600 h-3 rounded-full transition-all duration-700 ease-out"
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
    </motion.div>
  );
};

export default VoterDashboard;