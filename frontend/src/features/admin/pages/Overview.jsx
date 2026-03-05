import { useEffect, useState } from "react";
import { Users, Vote, TrendingUp, Layers } from "lucide-react";
import CountUp from "react-countup";
import { getAdminStats } from "../adminApi";
import Skeleton from "react-loading-skeleton";

const Overview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton height={32} width={280} />
        <div className="mt-2">
          <Skeleton height={18} width={350} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center gap-4">
              <Skeleton circle width={48} height={48} />
              <div className="flex-1">
                <Skeleton height={14} width="60%" />
                <div className="mt-2">
                  <Skeleton height={24} width="40%" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <Skeleton height={20} width={200} />
        <div className="mt-6">
          <Skeleton height={120} />
        </div>
      </div>

    </div>
  );
}

  const turnoutRate = stats?.totalVoters > 0 ? (stats.votesCast / stats.totalVoters) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, <span className="text-indigo-600">Admin</span>!
          </h1>
          <p className="text-gray-500 mt-1">
            Here’s how your election platform is performing.
          </p>
        </div>

        <span className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          System Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-blue-100 p-3 rounded-xl">
            <Users className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Voters</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={stats.totalVoters || 0} duration={1.2} />
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-purple-100 p-3 rounded-xl">
            <Vote className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Votes Cast</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={stats.votesCast || 0} duration={1.2} />
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-green-100 p-3 rounded-xl">
            <TrendingUp className="text-green-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Turnout Rate</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={turnoutRate} decimals={2} duration={1.2} />
              %
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <div className="bg-yellow-100 p-3 rounded-xl">
            <Layers className="text-yellow-600" size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Elections</p>
            <h2 className="text-2xl font-bold">
              <CountUp end={stats.activeElections || 0} duration={1.2} />
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition duration-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Platform Analytics
        </h3>

        <div className="h-40 flex flex-col items-center justify-center text-gray-400">
          <p className="text-lg font-medium">
            Coming Soon...
          </p>
          <p className="text-sm mt-1">
            Growth trends, vote distributions and participation analytics will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;