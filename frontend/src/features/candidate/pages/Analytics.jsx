import { useEffect, useState } from "react";
import { getVoteCount } from "../candidateApi";
import AnalyticsSkeleton from "../../../shared/components/skeletons/AnalyticsSkeleton";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { TrendingUp } from "lucide-react";

const COLORS = ["#138433", "#ebeae5"];

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await getVoteCount();

        setData({
          candidateVotes: res.candidate.totalVotes,
          rank: res.candidate.rank,
          totalCandidates: res.platformStats.totalCandidates,
          totalVoters: res.platformStats.totalVoters,
          totalVotesCast: res.platformStats.totalVotesCast
        });

      } catch (err) {
        console.error("Failed to fetch analytics");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
  return <AnalyticsSkeleton />;
  }

  if (!data || data.candidateVotes === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
        <TrendingUp className="mx-auto text-gray-300 mb-4" size={40} />
        <h2 className="text-lg font-semibold text-gray-700">
          No votes yet
        </h2>
        <p className="text-gray-400 mt-2">
          Once voters start supporting you, insights will appear here.
        </p>
      </div>
    );
  }

  const voteShareData = [
    { name: "Your Votes", value: data.candidateVotes },
    { name: "Other Votes", value: data.totalVotesCast - data.candidateVotes }
  ];

  const turnout = data.totalVoters ? (data.totalVotesCast / data.totalVoters) * 100 : 0;

  const rankPercent =
    ((data.totalCandidates - data.rank + 1) /
      data.totalCandidates) * 100;

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-2xl font-bold">Campaign Insights</h1>
        <p className="text-gray-500">
          Visual overview of your campaign performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="font-semibold mb-4 text-gray-700">
            Vote Share
          </h2>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={voteShareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {voteShareData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xl font-bold fill-gray-700"
                >
                  {data.candidateVotes}
                </text>

              </PieChart>
            </ResponsiveContainer>
          </div>

          <p className="text-center text-sm text-gray-500 mt-2">
            Your share of total votes
          </p>

        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="font-semibold mb-4 text-gray-700">
            Rank Position
          </h2>
          <p className="text-4xl font-bold mb-4">
            #{data.rank}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: `${rankPercent}%` }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Ranked #{data.rank} out of {data.totalCandidates} candidates
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="font-semibold mb-4 text-gray-700">
          Voter Participation
        </h2>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Total Votes Cast</span>
          <span className="font-medium">{data.totalVotesCast}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Total Registered Voters</span>
          <span className="font-medium">{data.totalVoters}</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-orange-300 h-3 rounded-full"
            style={{ width: `${turnout}%` }}
          />
        </div>

        <p className="text-sm text-gray-500 mt-3 text-center">
          {turnout.toFixed(1)}% voter turnout
        </p>

      </div>

    </div>
  );
};

export default Analytics;