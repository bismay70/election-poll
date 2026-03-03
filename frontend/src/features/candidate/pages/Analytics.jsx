import { useEffect, useState } from "react";
import { getVoteCount } from "../candidateApi";
import { TrendingUp, Clock, PieChart } from "lucide-react";

const Analytics = () => {
  const [votes, setVotes] = useState(0);
  const [rank, setRank] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVoteCount();
        setVotes(data.candidate.totalVotes || 0);
        setRank(data.candidate.rank);
        setLastUpdated(new Date().toLocaleString());
      } catch (err) {
        console.error("Failed to fetch analytics");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading analytics...</div>;
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-2xl font-bold">Campaign Insights</h1>
        <p className="text-gray-500">
          Snapshot of your current campaign performance.
        </p>
      </div>

      {votes === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
          <TrendingUp className="mx-auto text-gray-300 mb-4" size={40} />
          <h2 className="text-lg font-semibold text-gray-700">
            No votes yet
          </h2>
          <p className="text-gray-400 mt-2">
            Once voters start supporting you, insights will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 text-sm">Total Votes</p>
            <h2 className="text-3xl font-bold">{votes}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 text-sm">Current Rank</p>
            <h2 className="text-3xl font-bold">#{rank}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 text-sm">Last Updated</p>
            <h2 className="text-base font-semibold">{lastUpdated}</h2>
          </div>

        </div>
      )}

    </div>
  );
};

export default Analytics;