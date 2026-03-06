import React, { useEffect, useState } from "react";
import OverviewCard from "../components/OverviewCard";
import CandidateCard from "../components/CandidateCard";
import VoteModal from "../components/VoteModal";
import MiniAnalytics from "../components/MiniAnalytics";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Users, Vote, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import StatsCardSkeleton from "../../../shared/components/skeletons/StatsCardSkeleton";
import CandidateCardSkeleton from "../../../shared/components/skeletons/CandidateCardSkeleton";

import {getVoterCandidates, getVoterStats} from "../voterApi";

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
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <StatsCardSkeleton key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <CandidateCardSkeleton key={i} />
        ))}
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
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-blue-100 p-3 rounded-xl">
            <Users className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Registered Voters</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={stats.totalVoters || 0} duration={1.2} />
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-yellow-100 p-3 rounded-xl">
            <Vote className="text-yellow-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Votes Cast</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={stats.totalVotes || 0} duration={1.2} />
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-green-100 p-3 rounded-xl">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Voter Turnout</p>
            <h2 className="text-2xl font-bold">
              <CountUp
                end={stats.turnout || 0}
                decimals={1}
                duration={1.2}
              />
              %
            </h2>
          </div>
        </div>

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
            className="bg-green-600 h-3 rounded-full transition-all duration-700 ease-out"
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