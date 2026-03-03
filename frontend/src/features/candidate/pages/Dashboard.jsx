import { useEffect, useState } from "react";
import { Users, TrendingUp, Award } from "lucide-react";
import { getVoteCount } from "../candidateApi";
import CountUp from "react-countup";

const CandidateDashboard = () => {
  const [votes, setVotes] = useState(0);
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [totalVoters, setTotalVoters] = useState(0);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);

  const name = localStorage.getItem("name");

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const data = await getVoteCount();
        setVotes(data.candidate.totalVotes || 0);
        setRank(data.candidate.rank || null);
        setTotalCandidates(data.platformStats.totalCandidates || 0);
        setTotalVoters(data.platformStats.totalVoters || 0);
        setVotes(data.candidate.totalVotes || 0);
        setRank(data.candidate.rank || null);
      } catch (err) {
        console.error("Failed to fetch votes");
      } finally {
        setLoading(false);
      }
    };

    fetchVotes();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-24 bg-gray-200 rounded-2xl"></div>
          <div className="h-24 bg-gray-200 rounded-2xl"></div>
          <div className="h-24 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, <span className="text-indigo-600">{name}</span>!
          </h1>
          <p className="text-gray-500 mt-1">
            Here’s how your campaign is performing today.
          </p>
        </div>

        <span className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Campaign Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="bg-blue-100 p-3 rounded-xl">
            <Users className="text-blue-600" size={24} />
            </div>
            <div>
            <p className="text-gray-500 text-sm">Total Votes</p>
            <h2 className="text-2xl font-bold">
                <CountUp end={votes} duration={1.2} />
            </h2>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="bg-yellow-100 p-3 rounded-xl">
            <Award className="text-yellow-600" size={24} />
            </div>
            <div>
            <p className="text-gray-500 text-sm">Current Rank</p>
            <h2 className="text-2xl font-bold">
                {rank ? `#${rank}` : "—"}
            </h2>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="bg-purple-100 p-3 rounded-xl">
            <Users className="text-purple-600" size={24} />
            </div>
            <div>
            <p className="text-gray-500 text-sm">Total Candidates</p>
            <h2 className="text-2xl font-bold">
                <CountUp end={totalCandidates} duration={1.2} />
            </h2>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="bg-green-100 p-3 rounded-xl">
            <Users className="text-green-600" size={24} />
            </div>
            <div>
            <p className="text-gray-500 text-sm">Total Voters</p>
            <h2 className="text-2xl font-bold">
                <CountUp end={totalVoters} duration={1.2} />
            </h2>
            </div>
        </div>

        </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Advanced Analytics
        </h3>

        <div className="h-40 flex flex-col items-center justify-center text-gray-400">
          <p className="text-lg font-medium">
            Detailed performance insights coming soon
          </p>
          <p className="text-sm mt-1">
            Vote trends, growth charts and comparisons will be available here.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CandidateDashboard;