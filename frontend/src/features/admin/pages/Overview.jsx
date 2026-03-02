import { useEffect, useState } from "react";
import { getAdminStats } from "../adminApi";
import AdminStatsCard from "../components/AdminStatsCard";

const Overview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p className="text-gray-500 animate-pulse">
          Loading dashboard data...
        </p>
      </div>
    );
  }

  const turnoutRate =
    stats?.totalVoters > 0
      ? ((stats.votesCast / stats.totalVoters) * 100).toFixed(2)
      : "0.00";

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, Admin
          </h1>
          <p className="text-gray-500">
            Here's the overview of your election platform.
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
          System Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStatsCard title="Total Voters" value={stats.totalVoters || 0} />
        <AdminStatsCard title="Votes Cast" value={stats.votesCast || 0} />
        <AdminStatsCard title="Turnout Rate" value={`${turnoutRate}%`} />
        <AdminStatsCard title="Active Elections" value={stats.activeElections || 0} />
      </div>
    </div>
  );
};

export default Overview;