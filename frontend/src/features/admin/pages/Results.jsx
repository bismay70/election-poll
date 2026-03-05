import { useEffect, useState } from "react";
import { getLiveVotes } from "../adminApi";
import { io } from "socket.io-client";
import Skeleton from "react-loading-skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Results = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVotes = async () => {
    try {
      const res = await getLiveVotes();
      setData(res.candidates);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const socket = io(import.meta.env.VITE_API_URL, {
    withCredentials: true
  });

  fetchVotes();

  socket.on("voteUpdated", fetchVotes);

  return () => socket.disconnect();
}, []);

  const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"];
  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <Skeleton height={28} width={220} />
          <div className="mt-2">
            <Skeleton height={16} width={340} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            <Skeleton height={20} width={180} />
            <div className="mt-6">
              <Skeleton height={260} borderRadius={12} />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <Skeleton height={20} width={140} />
            <div className="mt-6">
              <Skeleton height={260} borderRadius={12} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Election Results</h1>
          <p className="text-gray-500">
            Live vote distribution across candidates.
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold mb-4">Votes by Candidate</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalVotes" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold mb-4">Vote Share</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="totalVotes"
                nameKey="name"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Results;