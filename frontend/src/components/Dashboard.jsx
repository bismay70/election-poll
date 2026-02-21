import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';

const pieData = [
  { name: 'Voted', value: 400 },
  { name: 'Not Voted', value: 300 },
];

const COLORS = ['#000000', '#60a5fa']; 

const barData = [
  { constituency: 'Mumbai North', voted: 120, notVoted: 30 },
  { constituency: 'Delhi South', voted: 90, notVoted: 60 },
  { constituency: 'Bangalore East', voted: 70, notVoted: 80 },
];

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      
   
      <div className="flex justify-center mb-8">
        <img
          src="/images/Screenshot 2025-08-16 130806.png"
          alt="Dashboard Top"
          className="rounded-xl shadow-md w-full max-w-lg object-cover"
        />
      </div>

    
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Election Statistics</h2>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
     
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-4 text-center">Voter Participation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-4 text-center">Votes by Constituency</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="constituency" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="voted" fill="#000000" />
              <Bar dataKey="notVoted" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

