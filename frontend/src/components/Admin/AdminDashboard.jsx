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

// Mock Data for Charts (Updated for Election Context)
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
  { name: 'Mobile App', value: 450000 },
  { name: 'Web Portal', value: 320000 },
  { name: 'Offline', value: 210000 },
  { name: 'Postal', value: 80000 },
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
    <div className="flex h-screen bg-gray-50 font-sans text-black">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-4 border-black flex flex-col transition-all duration-300">
        <div className="p-4 flex items-center gap-3 border-b-4 border-black bg-blue-50">
           <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-none border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" alt="Admin" />
           <div className="leading-tight">
               <span className="block text-black font-black uppercase text-sm">Alexander Pierce</span>
               <span className="text-xs text-green-600 font-bold uppercase">● Online</span>
           </div>
        </div>
        
        <div className="px-4 py-3 bg-black">
             <span className="text-xs uppercase font-black tracking-widest text-white">Election Menu</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-1">
            <NavItem 
                icon={<LayoutDashboard size={18} />} 
                label="Overview" 
                active={true} 
            />
            
            <NavItem icon={<FileText size={18} />} label="Elections" badge="Active" badgeColor="bg-green-500 text-black border border-black" />
            <NavItem icon={<BarChart3 size={18} />} label="Results" />
            <NavItem icon={<Users size={18} />} label="Voters" />
            <NavItem icon={<Users size={18} />} label="Candidates" />
            
             <div className="px-4 py-3 mt-4 bg-black">
                 <span className="text-xs uppercase font-black tracking-widest text-white">System</span>
            </div>
            <NavItem icon={<Settings size={18} />} label="Settings" />
            <NavItem icon={<LogOut size={18} />} label="Logout" />
        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        
        {/* Topbar */}
        <header className="bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center sticky top-0 z-20">
             <div className="flex items-center gap-4">
                 <h2 className="text-2xl font-black uppercase tracking-tighter text-black">Election Overview</h2>
                 <span className="text-xs font-bold text-blue-600 cursor-pointer underline decoration-2 decoration-blue-200 hover:decoration-blue-600">Home</span>
                 <span className="text-xs text-black font-bold">/</span>
                 <span className="text-xs font-bold text-gray-500">Overview</span>
             </div>
        </header>

        <div className="p-8 space-y-8">
            
            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <StatCard 
                    icon={<Users className="text-black" size={24} />} 
                    color="bg-blue-400" 
                    label="Total Voters" 
                    value="1.2M" 
                />
                 <StatCard 
                    icon={<ThumbsUp className="text-black" size={24} />} 
                    color="bg-red-500" 
                    label="Votes Cast" 
                    value="850k" 
                />
                 <StatCard 
                    icon={<ShoppingCart className="text-black" size={24} />} 
                    color="bg-green-500" 
                    label="Turnout" 
                    value="72%" 
                />
                 <StatCard 
                    icon={<Users className="text-black" size={24} />} 
                    color="bg-yellow-400" 
                    label="New Registrations" 
                    value="45k" 
                />
            </div>

            {/* Monthly Recap Report Chart */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50">
                     <h3 className="font-black text-black uppercase tracking-tight">Voting Trends</h3>
                 </div>
                 <div className="p-6 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={areaData}>
                            <defs>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#000" strokeOpacity={0.1} />
                            <XAxis dataKey="name" tick={{fill: 'black', fontWeight: 'bold', fontSize: 12}} />
                            <YAxis tick={{fill: 'black', fontWeight: 'bold', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{border: '2px solid black', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', borderRadius: '0px'}}
                                itemStyle={{color: 'black', fontWeight: 'bold'}}
                            />
                            <Area type="monotone" dataKey="sales" stroke="#000" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                            <Area type="monotone" dataKey="visits" stroke="#666" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* Map & Browser Usage Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Map Section */}
                <div className="lg:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden relative h-[450px]">
                     <div className="p-4 border-b-4 border-black flex justify-between items-center bg-gray-50">
                         <h3 className="font-black text-black uppercase tracking-tight">Live Result Map</h3>
                         <MapPin className="text-black" size={20} />
                     </div>
                     <div className="h-full w-full relative p-2 bg-blue-100">
                        <div className="h-full w-full border-2 border-black">
                            <GoogleMapComponent />
                        </div>
                     </div>
                </div>

                {/* Right Column: Info Cards & Browser Usage */}
                <div className="space-y-6">
                     <InfoBox color="bg-yellow-400" icon={<ShoppingCart size={24} className="text-black"/>} label="Polling Stations" value="5,200" />
                     <InfoBox color="bg-green-500" icon={<MessageSquare size={24} className="text-black"/>} label="Issues Reported" value="92" />
                     <InfoBox color="bg-red-500" icon={<FileText size={24} className="text-black"/>} label="Ballots Counted" value="114k" />
                     <InfoBox color="bg-blue-400" icon={<Mail size={24} className="text-black"/>} label="Messages" value="163" />
                    
                    {/* Browser Usage */}
                     <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4">
                         <h3 className="font-black text-black mb-4 border-b-2 border-black pb-2 uppercase tracking-tight">Voting Methods</h3>
                         <div className="h-48 flex items-center justify-center">
                             <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={pieData} innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value" stroke="black" strokeWidth={2}>
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{border: '2px solid black', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', borderRadius: '0px'}} />
                                </PieChart>
                             </ResponsiveContainer>
                         </div>
                         <div className="text-xs space-y-2 mt-2">
                             {pieData.map((entry, index) => (
                                 <div key={index} className="flex items-center gap-2">
                                     <div className="w-3 h-3 border border-black" style={{backgroundColor: COLORS[index]}}></div>
                                     <span className="font-bold text-black uppercase">{entry.name}</span>
                                     <span className="ml-auto font-black text-black">{entry.value}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>

            </div>

             {/* Latest Members Row (No Chat) */}
             <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
                   <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-2">
                        <h3 className="font-black text-black uppercase tracking-tight">Recent Voter Registrations</h3>
                        <span className="bg-blue-500 text-black border-2 border-black font-bold text-xs px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer">8 New Today</span>
                   </div>
                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
                        {[1,2,3,4,5,6,7,8].map((i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer p-2 hover:bg-yellow-100 border-2 border-transparent hover:border-black transition-all">
                                <img src={`https://randomuser.me/api/portraits/thumb/men/${i+10}.jpg`} className="w-14 h-14 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3" />
                                <span className="text-xs font-black text-black uppercase group-hover:underline">Voter {i}</span>
                                <span className="text-[10px] text-green-600 font-bold uppercase mt-1 border border-black px-1 bg-green-100">Verified</span>
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
    <div className={`px-4 py-3 cursor-pointer group border-l-4 transition-all ${active ? 'bg-blue-100 border-black text-black' : 'border-transparent hover:bg-gray-100 hover:border-gray-300 text-gray-600 hover:text-black'}`}>
         <div className="flex items-center gap-3 text-sm">
             <span className={`${active ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>{icon}</span>
             <span className={`${active ? 'text-black font-bold' : 'font-semibold group-hover:font-bold'}`}>{label}</span>
             {badge && <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${badgeColor}`}>{badge}</span>}
             {hasSubmenu && <span className={`ml-auto text-xs text-black font-bold transform ${isOpen ? 'rotate-90' : ''}`}>›</span>}
         </div>
         {isOpen && children && <div className="mt-2 ml-2 space-y-1">{children}</div>}
    </div>
);

const SubItem = ({ label, active }) => (
    <div className={`pl-8 py-1 text-sm font-bold ${active ? 'text-black underline' : 'text-gray-500 hover:text-black hover:underline'}`}>
        ○ {label}
    </div>
)

const StatCard = ({ icon, color, label, value }) => (
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center p-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
        <div className={`${color} p-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -mt-8 mr-4`}>
            {icon}
        </div>
        <div>
            <span className="text-xs text-black uppercase font-black tracking-wider">{label}</span>
            <h3 className="text-2xl font-black text-black">{value}</h3>
        </div>
    </div>
)

const InfoBox = ({ color, icon, label, value }) => (
    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center p-3 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className={`${color} p-3 border-2 border-black mr-4`}>
            {icon}
        </div>
        <div>
            <span className="block text-xs text-gray-600 uppercase font-bold">{label}</span>
            <span className="block text-lg font-black text-black">{value}</span>
        </div>
    </div>
)
