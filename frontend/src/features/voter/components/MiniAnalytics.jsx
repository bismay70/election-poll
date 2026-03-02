import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#6366F1", "#E5E7EB"];

const MiniAnalytics = ({ totalVoters, totalVotes }) => {
  const remaining = totalVoters - totalVotes;

  const pieData = [
    { name: "Voted", value: totalVotes },
    { name: "Not Voted", value: remaining },
  ];

  const barData = [
    { name: "Votes Cast", value: totalVotes },
    { name: "Remaining", value: remaining },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-semibold mb-4">Voter Participation</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Voting Status</h3>
            <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MiniAnalytics;