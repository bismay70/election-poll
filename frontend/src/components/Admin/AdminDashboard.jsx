import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Settings, 
  Users, 
  ShoppingCart, 
  ThumbsUp, 
  MoreHorizontal,
  MapPin,
  MessageSquare,
  Search,
  LayoutDashboard,
  FileText,
  Mail,
  Calendar,
  Image as ImageIcon,
  BarChart3,
  LogOut
} from 'lucide-react';

// Mock Data for Charts
const areaData = [
  { name: 'Jan', sales: 4000, visits: 2400 },
  { name: 'Feb', sales: 3000, visits: 1398 },
  { name: 'Mar', sales: 2000, visits: 9800 },
  { name: 'Apr', sales: 2780, visits: 3908 },
  { name: 'May', sales: 1890, visits: 4800 },
  { name: 'Jun', sales: 2390, visits: 3800 },
  { name: 'Jul', sales: 3490, visits: 4300 },
];

const pieData = [
  { name: 'Chrome', value: 400 },
  { name: 'Safari', value: 300 },
  { name: 'Firefox', value: 300 },
  { name: 'IE', value: 200 },
];

const COLORS = ['#ef4444', '#3b82f6', '#f59e0b', '#10b981'];

const GoogleMapComponent = () => {
    React.useEffect(() => {
        // Initialize the map
        const initMap = async () => {
            if (!window.google) {
                // Load the Google Maps script dynamically if it doesn't exist
                 (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
                 ({key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, v: "weekly"});
            }

            try {
                // Wait a brief moment for the script to attach or just use the promise if using a proper loader
                // Since the snippet provided is a bit raw, we interpret it as loading the lib.
                // However, directly calling importLibrary right after might be too fast if script isn't loaded.
                // The snippet actually sets up `google.maps.importLibrary` immediately to wait.
                
                const { Map } = await google.maps.importLibrary("maps");
        
                new Map(document.getElementById("map"), {
                    center: { lat: 20.5937, lng: 78.9629 }, // India
                    zoom: 5,
                });
            } catch (error) {
                console.error("Google Maps Error:", error);
            }
        };

        initMap();
    }, []);

    return <div id="map" className="w-full h-full min-h-[300px]" />;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard_v2');

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-gray-400 flex flex-col transition-all duration-300">
        <div className="p-4 flex items-center gap-3 border-b border-gray-800">
           <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border border-gray-600" alt="Admin" />
           <span className="text-white font-semibold">Alexander Pierce</span>
        </div>
        
        <div className="px-4 py-2 bg-gray-800">
             <span className="text-xs uppercase font-bold tracking-wider text-gray-500">Election Menu</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
            <NavItem 
                icon={<LayoutDashboard size={18} />} 
                label="Overview" 
                active={true} 
            />
            
            <NavItem icon={<FileText size={18} />} label="Elections" badge="Active" badgeColor="bg-green-500" />
            <NavItem icon={<BarChart3 size={18} />} label="Results" />
            <NavItem icon={<Users size={18} />} label="Voters" />
            <NavItem icon={<Users size={18} />} label="Candidates" />
            
             <div className="px-4 py-2 mt-4">
                 <span className="text-xs uppercase font-bold tracking-wider text-gray-500">System</span>
            </div>
            <NavItem icon={<Settings size={18} />} label="Settings" />
            <NavItem icon={<LogOut size={18} />} label="Logout" />
        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Topbar */}
        <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
             <div className="flex items-center gap-4">
                 <h2 className="text-xl font-semibold text-gray-700">Election Overview</h2>
                 <span className="text-xs text-blue-500 cursor-pointer">Home</span>
                 <span className="text-xs text-gray-400">/</span>
                 <span className="text-xs text-gray-500">Overview</span>
             </div>
        </header>

        <div className="p-6 space-y-6">
            
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <StatCard 
                    icon={<Users className="text-white" size={24} />} 
                    color="bg-blue-400" 
                    label="Total Voters" 
                    value="1.2M" 
                />
                 <StatCard 
                    icon={<ThumbsUp className="text-white" size={24} />} 
                    color="bg-red-500" 
                    label="Votes Cast" 
                    value="850k" 
                />
                 <StatCard 
                    icon={<ShoppingCart className="text-white" size={24} />} 
                    color="bg-green-500" 
                    label="Turnout" 
                    value="72%" 
                />
                 <StatCard 
                    icon={<Users className="text-white" size={24} />} 
                    color="bg-yellow-400" 
                    label="New Registrations" 
                    value="45k" 
                />
            </div>

            {/* Monthly Recap Report Chart */}
            <div className="bg-white rounded-sm shadow-md">
                 <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                     <h3 className="font-bold text-gray-700">Voting Trends</h3>
                 </div>
                 <div className="p-4 h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={areaData}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" />
                            <Area type="monotone" dataKey="visits" stroke="#9ca3af" fill="transparent" strokeDasharray="5 5" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* Map & Browser Usage Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Map Section */}
                <div className="lg:col-span-2 bg-white rounded-sm shadow-md p-0 overflow-hidden relative h-96">
                     <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                         <h3 className="font-bold text-gray-700">Live Result Map</h3>
                         <MapPin className="text-gray-400" size={18} />
                     </div>
                     <div className="h-full w-full relative">
                        <GoogleMapComponent />
                     </div>
                </div>

                {/* Right Column: Info Cards & Browser Usage */}
                <div className="space-y-4">
                     <InfoBox color="bg-yellow-400" icon={<ShoppingCart size={24} className="text-white"/>} label="Polling Stations" value="5,200" />
                     <InfoBox color="bg-green-500" icon={<MessageSquare size={24} className="text-white"/>} label="Issues Reported" value="92" />
                     <InfoBox color="bg-red-500" icon={<FileText size={24} className="text-white"/>} label="Ballots Counted" value="114k" />
                     <InfoBox color="bg-blue-400" icon={<Mail size={24} className="text-white"/>} label="Messages" value="163" />
                    
                    {/* Browser Usage */}
                     <div className="bg-white rounded-sm shadow-md p-4">
                         <h3 className="font-bold text-gray-700 mb-4 border-b border-gray-100 pb-2">Device Usage</h3>
                         <div className="h-48 flex items-center justify-center">
                             <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={pieData} innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value">
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                             </ResponsiveContainer>
                         </div>
                         <div className="text-xs space-y-1 mt-2">
                             {pieData.map((entry, index) => (
                                 <div key={index} className="flex items-center gap-2">
                                     <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
                                     <span style={{color: COLORS[index]}}>{entry.name}</span>
                                     <span className="ml-auto font-bold">{entry.value}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>

            </div>

             {/* Latest Members Row (No Chat) */}
             <div className="bg-white rounded-sm shadow-md p-4">
                   <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                        <h3 className="font-bold text-gray-700">Recent Voter Registrations</h3>
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">8 New Today</span>
                   </div>
                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
                        {[1,2,3,4,5,6,7,8].map((i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer">
                                <img src={`https://randomuser.me/api/portraits/thumb/men/${i+10}.jpg`} className="w-12 h-12 rounded-full border border-gray-200 p-0.5 mb-2 group-hover:border-blue-500 transition-colors" />
                                <span className="text-xs font-bold text-gray-700 group-hover:text-blue-600">Voter {i}</span>
                                <span className="text-[10px] text-gray-400">Verified</span>
                            </div>
                        ))}
                   </div>
              </div>

        </div>
      </main>
    </div>
  );
}

// Sub-components
const NavItem = ({ icon, label, badge, badgeColor, active, hasSubmenu, isOpen, children }) => (
    <div className={`px-4 py-2 hover:bg-gray-800 cursor-pointer group ${active ? 'bg-gray-800 border-l-4 border-blue-500' : 'border-l-4 border-transparent'}`}>
         <div className="flex items-center gap-3 text-sm">
             <span className={`${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{icon}</span>
             <span className={`${active ? 'text-white font-bold' : 'text-gray-300 group-hover:text-white'}`}>{label}</span>
             {badge && <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${badgeColor}`}>{badge}</span>}
             {hasSubmenu && <span className={`ml-auto text-xs text-gray-500 transform ${isOpen ? 'rotate-90' : ''}`}>›</span>}
         </div>
         {isOpen && children && <div className="mt-2 ml-2 space-y-1">{children}</div>}
    </div>
);

const SubItem = ({ label, active }) => (
    <div className={`pl-8 py-1 text-sm ${active ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
        ○ {label}
    </div>
)

const StatCard = ({ icon, color, label, value }) => (
    <div className="bg-white rounded-sm shadow-md flex items-center p-4">
        <div className={`${color} p-4 rounded-sm shadow-sm -mt-8 mr-4`}>
            {icon}
        </div>
        <div>
            <span className="text-xs text-gray-500 uppercase font-bold">{label}</span>
            <h3 className="text-lg font-bold text-gray-800">{value}</h3>
        </div>
    </div>
)

const InfoBox = ({ color, icon, label, value }) => (
    <div className="bg-white rounded-sm shadow-md flex items-center p-3">
        <div className={`${color} p-3 rounded-sm mr-4`}>
            {icon}
        </div>
        <div>
            <span className="block text-xs text-gray-500 uppercase font-bold">{label}</span>
            <span className="block text-lg font-bold text-gray-800">{value}</span>
        </div>
    </div>
)
