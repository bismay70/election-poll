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
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { 
  LayoutDashboard, 
  ListTodo, 
  CalendarDays, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  Plus,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';

const pieData = [
  { name: 'Voted', value: 400 },
  { name: 'Not Voted', value: 300 },
];

const COLORS = ['#60a5fa', '#e5e7eb']; // Blue-400

const barData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 40 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 45 },
  { name: 'Sat', value: 60 },
  { name: 'Sun', value: 55 },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <LayoutDashboard className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-gray-800">ElectPoll</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
             <Users className="h-5 w-5" />
            Voters
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
              <BarChart3 className="h-5 w-5" />
             Analytics
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
             <CalendarDays className="h-5 w-5" />
            Calendar
          </a>
        </nav>

        <div className="px-4 py-4 space-y-1 mb-8">
           <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">General</p>
           {/* ... Settings, Help, Logout */}
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
             <Settings className="h-5 w-5" />
            Settings
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
             <HelpCircle className="h-5 w-5" />
            Help
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
             <LogOut className="h-5 w-5" />
            Logout
          </a>
        </div>
        
         <div className="p-4 mx-4 mb-4 bg-blue-900 rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="font-bold text-lg mb-1">Mobile App</h4>
                <p className="text-xs text-blue-200 mb-3">Download our app for better experience</p>
                <button className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-3 py-2 rounded-lg font-semibold transition-colors">
                    Download
                </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute top-4 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
         </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        
        {/* Header/Topbar */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
             {/* Search */}
             <div className="relative w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="Search tasks" 
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm text-gray-600"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                     <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                 <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">admin@electpoll.com</p>
                    </div>
                     <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-500" />
                </div>
            </div>
        </header>

        {/* Dashboard Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
             <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-500">Plan, prioritize, and monitor the election process.</p>
            </div>
             <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                    <Plus className="h-5 w-5" />
                    New Election
                </button>
                 <button className="border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                    Import Voter Data
                </button>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Card 1 */}
            <div className="bg-blue-600 rounded-xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-100">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-blue-100 font-medium">Total Voters</span>
                    <div className="bg-blue-500 p-1 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                </div>
                <h3 className="text-4xl font-bold mb-2">24k</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="bg-blue-500 px-1 rounded text-white">+12%</span>
                    from last month
                </p>
                 <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500 rounded-full opacity-30"></div>
            </div>

             {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-medium">Candidates</span>
                     <div className="bg-gray-100 p-1 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-gray-500" />
                    </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gray-900">10</h3>
                 <p className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-blue-600 font-bold">+2</span>
                    new this week
                </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-medium">Active Elections</span>
                     <div className="bg-gray-100 p-1 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-gray-500" />
                    </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gray-900">12</h3>
                 <p className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="text-red-500 font-bold">-1</span>
                    from last month
                </p>
            </div>

             {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-medium">Pending Approvals</span>
                     <div className="bg-gray-100 p-1 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-gray-500" />
                    </div>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gray-900">2</h3>
                 <p className="text-xs text-gray-400">On Check</p>
            </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Bar Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-gray-800">Voter Analytics</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-5 w-5" />
                    </button>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                            <Tooltip cursor={{fill: '#eff6ff'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Reminders / Secondary Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">Reminders</h3>
                    <p className="text-gray-500 text-sm mb-6">Upcoming Election Deadlines</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-center min-w-[3.5rem]">
                                <span className="block text-xs text-gray-500 uppercase font-bold">Feb</span>
                                <span className="block text-xl font-bold text-blue-700">24</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Voter Registration Ends</h4>
                                <p className="text-xs text-gray-500">10:00 AM - 04:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <button className="w-full bg-blue-800 text-white py-3 rounded-lg font-bold mt-6 hover:bg-blue-900 transition-colors shadow-lg shadow-blue-100">
                    View All Reminders
                </button>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-gray-800">Calendar View</h3>
                     <button className="text-sm font-semibold text-blue-600 border border-blue-200 px-3 py-1 rounded-md hover:bg-blue-50">
                        View Full
                    </button>
                </div>
                {/* Simple Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                     {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                         <div key={day} className="font-semibold text-gray-400 mb-2">{day}</div>
                     ))}
                     {Array.from({length: 31}, (_, i) => i + 1).map(date => (
                         <div key={date} className={`p-2 rounded-lg ${date === 24 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50 text-gray-700'}`}>
                             {date}
                             {date === 24 && <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>}
                         </div>
                     ))}
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-6">Project Progress</h3>
                <div className="relative h-48 flex items-center justify-center">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={[{value: 75}, {value: 25}]}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={0}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            <Cell fill="#3b82f6" />
                            <Cell fill="#e5e7eb" />
                        </Pie>
                    </PieChart>
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-4">
                        <span className="text-3xl font-bold text-gray-900">75%</span>
                        <p className="text-xs text-gray-500">Completed</p>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}

