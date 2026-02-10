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

const COLORS = ['#3b82f6', '#d1d5db']; // Blue-500, Gray-300

const barData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 40 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 45 },
  { name: 'Sat', value: 60 },
  { name: 'Sun', value: 55 },
];

const CalendarWidget = () => {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        return { daysInMonth, firstDayOfMonth };
    };

    const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="lg:col-span-2 bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
                <h3 className="font-black text-lg text-black uppercase tracking-tight">Calendar</h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-gray-100 border-2 border-black p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <button onClick={prevMonth} className="p-1 hover:bg-black hover:text-white transition-all text-black border border-transparent hover:border-black rounded-none">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span className="text-sm font-black text-black w-32 text-center select-none uppercase">
                             {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </span>
                        <button onClick={nextMonth} className="p-1 hover:bg-black hover:text-white transition-all text-black border border-transparent hover:border-black rounded-none">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <button 
                        onClick={() => setCurrentDate(new Date())}
                        className="text-xs font-black text-white bg-blue-600 border-2 border-black px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all uppercase"
                    >
                        Today
                    </button>
                </div>
            </div>
            {/* Functional Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                     <div key={day} className="font-black text-gray-500 mb-2 py-2 uppercase tracking-wide">{day}</div>
                 ))}
                 {(() => {
                    const days = [];
                    // Empty slots for previous month
                    for (let i = 0; i < firstDayOfMonth; i++) {
                        days.push(<div key={`empty-${i}`} className="p-2"></div>);
                    }
                    // Days of current month
                    const today = new Date();
                    for (let i = 1; i <= daysInMonth; i++) {
                        const isToday = 
                            i === today.getDate() && 
                            currentDate.getMonth() === today.getMonth() && 
                            currentDate.getFullYear() === today.getFullYear();
                        
                        days.push(
                            <div key={i} className={`p-2 font-bold cursor-pointer border-2 transition-all ${isToday ? 'bg-blue-600 text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'border-transparent hover:border-black hover:bg-blue-50 text-gray-700'}`}>
                                {i}
                            </div>
                        );
                    }
                    return days;
                 })()}
            </div>
        </div>
    );
};

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-4 border-black hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-3 bg-blue-50 border-b-4 border-black">
          <div className="bg-black p-2 border-2 border-transparent">
            <LayoutDashboard className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-black text-black uppercase tracking-tighter">ElectPoll</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <p className="px-4 text-xs font-black text-black uppercase tracking-widest mb-4 bg-yellow-300 inline-block py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">Menu</p>
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-100 border-2 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-bold">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
             <Users className="h-5 w-5" />
            Voters
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
              <BarChart3 className="h-5 w-5" />
             Analytics
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
             <CalendarDays className="h-5 w-5" />
            Calendar
          </a>
        </nav>

        <div className="px-4 py-4 space-y-2 mb-8 border-t-4 border-black pt-6">
           <p className="px-4 text-xs font-black text-black uppercase tracking-widest mb-2">General</p>
           {/* ... Settings, Help, Logout */}
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
             <Settings className="h-5 w-5" />
            Settings
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
             <HelpCircle className="h-5 w-5" />
            Help
          </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all font-bold">
             <LogOut className="h-5 w-5" />
            Logout
          </a>
        </div>
        
         <div className="p-4 mx-4 mb-4 bg-black border-2 border-black text-white relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="relative z-10">
                <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Mobile App</h4>
                <p className="text-xs text-gray-300 mb-3 font-medium">Download our app for better experience</p>
                <button className="bg-white text-black border-2 border-transparent hover:border-white hover:bg-black hover:text-white text-xs px-3 py-2 font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:shadow-none">
                    Download
                </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-800 rounded-full opacity-50"></div>
         </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
        
        {/* Header/Topbar */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             {/* Search */}
             <div className="relative w-full md:w-96">
                <input 
                    type="text" 
                    placeholder="SEARCH ELECTIONS, VOTERS..." 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all font-bold text-sm text-black placeholder-gray-500 rounded-none uppercase"
                />
                <div className="absolute left-3 top-3.5 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-black hover:bg-yellow-300 border-2 border-transparent hover:border-black transition-all rounded-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                     <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-black rounded-full"></span>
                </button>
                 <button className="relative p-2 text-black hover:bg-yellow-300 border-2 border-transparent hover:border-black transition-all rounded-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-black rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-6 border-l-4 border-black">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-black text-black uppercase">Admin User</p>
                        <p className="text-xs text-gray-600 font-bold">admin@electpoll.com</p>
                    </div>
                     <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-10 h-10 rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                </div>
            </div>
        </header>

        {/* Dashboard Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
             <div>
                <h1 className="text-5xl font-black text-black mb-2 uppercase tracking-tighter">Dashboard</h1>
                <div className="bg-yellow-300 inline-block px-2 py-1 border-2 border-black transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-black font-bold text-sm uppercase">Plan, prioritize, and monitor.</p>
                </div>
            </div>
             <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 bg-black text-white px-6 py-3 font-black uppercase tracking-wider border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Plus className="h-5 w-5" />
                    New Election
                </button>
                 <button className="bg-white text-black px-6 py-3 font-black uppercase tracking-wider border-2 border-black hover:bg-gray-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Import Data
                </button>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Card 1 */}
            <div className="bg-blue-600 p-6 text-white relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-white font-black uppercase tracking-widest border-b-2 border-white pb-1">Total Voters</span>
                    <div className="bg-black p-1 border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                </div>
                <h3 className="text-5xl font-black mb-2 relative z-10">24k</h3>
                <p className="text-xs text-white flex items-center gap-2 relative z-10 font-bold">
                    <span className="bg-black px-2 py-0.5 text-white border border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">+12%</span>
                    FROM LAST MONTH
                </p>
                 <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black opacity-20 transform rotate-45 border-4 border-white"></div>
            </div>

             {/* Card 2 */}
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-black uppercase tracking-widest border-b-2 border-gray-200 pb-1">Candidates</span>
                     <div className="bg-gray-100 p-1 border-2 border-black">
                        <ArrowUpRight className="h-4 w-4 text-black" />
                    </div>
                </div>
                <h3 className="text-5xl font-black mb-2 text-black">10</h3>
                 <p className="text-xs text-gray-500 flex items-center gap-2 font-bold uppercase">
                    <span className="text-blue-600 bg-blue-100 px-1 border border-black">+2</span>
                    new this week
                </p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-black uppercase tracking-widest border-b-2 border-gray-200 pb-1">Active Elections</span>
                     <div className="bg-gray-100 p-1 border-2 border-black">
                        <ArrowUpRight className="h-4 w-4 text-black" />
                    </div>
                </div>
                <h3 className="text-5xl font-black mb-2 text-black">12</h3>
                 <p className="text-xs text-gray-500 flex items-center gap-2 font-bold uppercase">
                    <span className="text-red-500 bg-red-100 px-1 border border-black">-1</span>
                    from last month
                </p>
            </div>

             {/* Card 4 */}
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-black uppercase tracking-widest border-b-2 border-gray-200 pb-1">Pending</span>
                     <div className="bg-gray-100 p-1 border-2 border-black">
                        <ArrowUpRight className="h-4 w-4 text-black" />
                    </div>
                </div>
                <h3 className="text-5xl font-black mb-2 text-black">2</h3>
                 <p className="text-xs text-black bg-yellow-300 inline-block px-1 border border-black font-bold uppercase">On Check</p>
            </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Bar Chart */}
            <div className="lg:col-span-2 bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
                    <h3 className="font-black text-lg text-black uppercase tracking-tight">Voter Analytics</h3>
                    <button className="text-black hover:bg-gray-100 p-1 border-2 border-transparent hover:border-black transition-all">
                        <MoreHorizontal className="h-5 w-5" />
                    </button>
                </div>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'black', fontWeight: 'bold', fontSize: 12}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: 'black', fontWeight: 'bold', fontSize: 12}} />
                            <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{border: '2px solid black', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', borderRadius: '0px', fontWeight: 'bold'}} />
                            <Bar dataKey="value" fill="#3b82f6" radius={[0, 0, 0, 0]} barSize={40} stroke="black" strokeWidth={2} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Reminders / Secondary Card */}
            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                    <h3 className="font-black text-lg text-black mb-1 uppercase tracking-tight border-b-4 border-black pb-2">Reminders</h3>
                    <p className="text-gray-500 text-xs font-bold uppercase mb-6 mt-2">Upcoming Deadlines</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 group cursor-pointer">
                            <div className="bg-yellow-300 p-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center min-w-[3.5rem] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                                <span className="block text-xs text-black uppercase font-black">Feb</span>
                                <span className="block text-2xl font-black text-black">24</span>
                            </div>
                            <div>
                                <h4 className="font-black text-black uppercase text-sm group-hover:underline">Voter Registration</h4>
                                <p className="text-xs text-black bg-gray-100 inline-block px-1 border border-black font-bold mt-1">10:00 AM - 04:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <button className="w-full bg-black text-white py-3 font-black uppercase tracking-wider mt-6 border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                    View All Reminders
                </button>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CalendarWidget />

            <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-lg text-black mb-6 border-b-4 border-black pb-4 uppercase tracking-tight">Project Progress</h3>
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
                            paddingAngle={0}
                            dataKey="value"
                            stroke="black"
                            strokeWidth={2}
                        >
                            <Cell fill="#3b82f6" />
                            <Cell fill="#e5e7eb" />
                        </Pie>
                    </PieChart>
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-4">
                        <span className="text-4xl font-black text-black">75%</span>
                        <p className="text-xs text-gray-500 font-bold uppercase">Completed</p>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}
