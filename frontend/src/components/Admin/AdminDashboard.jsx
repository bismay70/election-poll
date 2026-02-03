import React, { useState } from 'react';
import { BarChart3, Users, Vote, Settings, Plus, Eye } from 'lucide-react';

const mockElections = [
	{
		id: 'webwiz',
		name: 'Webwiz Election',
		startDate: '2024-06-01',
		endDate: '2024-06-07',
		status: 'active',
		constituencies: ['pod 1', 'pod 2', 'pod 3', 'pod 4', 'pod 5', 'pod 6', 'pod 7', 'pod 8'],
	},
	{
		id: 'sac',
		name: 'SAC Election',
		startDate: '2024-07-10',
		endDate: '2024-07-15',
		status: 'upcoming',
		constituencies: ['Zone bbsr', 'Zone eastern'],
	},
];

const resultsData = {
	webwiz: [
		{ candidate: 'Sanket bhai', party: 'Frontend First', votes: 80, percentage: 56.2 },
		{ candidate: 'Swasti bhai', party: 'API Alliance', votes: 60, percentage: 43.8 },
	],
	sac: [
		{ candidate: 'Sanket bha', party: 'Student Unity', votes: 70, percentage: 60 },
		{ candidate: 'Swasti bhai', party: 'Campus Forward', votes: 40, percentage: 40 },
	],
};

const AdminDashboard = () => {
	const [activeTab, setActiveTab] = useState('overview');
	const [selectedResultElection, setSelectedResultElection] = useState('webwiz');

	const StatCard = ({ title, value, icon: Icon, color }) => (
		<div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center space-x-4 hover:scale-105 transition w-full">
			<div className={`bg-${color}-100 p-3 rounded-full`}>
				<Icon className={`h-8 w-8 text-${color}-600`} />
			</div>
			<div>
				<div className="text-2xl font-bold font-mono text-gray-900">{value}</div>
				<div className="text-sm font-semibold text-gray-500">{title}</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
			<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight font-serif text-center">
				Admin Dashboard
			</h1>
			
			
			<div className="flex justify-center mb-10">
				<img
					src="/images/votes_count.png"
					alt="Admin Banner"
					className="rounded-lg shadow-md w-60 h-40 object-cover"
				/>
			</div>
			
			<div className="mb-8">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex justify-center space-x-8">
						{[
							{ id: 'overview', label: 'Overview', icon: BarChart3 },
							{ id: 'elections', label: 'Elections', icon: Vote },
							{ id: 'results', label: 'Results', icon: Eye },
							{ id: 'settings', label: 'Settings', icon: Settings },
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
									activeTab === tab.id
										? 'border-black text-black'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								<tab.icon className="h-5 w-5" />
								<span>{tab.label}</span>
							</button>
						))}
					</nav>
				</div>
			</div>

		
			{activeTab === 'overview' && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<StatCard title="Total Voters" value="220" icon={Users} color="blue" />
					<StatCard title="Votes Cast" value="180" icon={Vote} color="green" />
					<StatCard title="Turnout Rate" value="69.8%" icon={BarChart3} color="purple" />
					<StatCard title="Active Elections" value="2" icon={Settings} color="orange" />
				</div>
			)}

		
			{activeTab === 'elections' && (
				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl font-bold text-gray-900">Elections</h2>
						<button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
							<Plus className="h-4 w-4" />
							<span>New Election</span>
						</button>
					</div>

					<div className="grid gap-6">
						{mockElections.map((election) => (
							<div key={election.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
								<div className="flex justify-between items-start mb-4">
									<div>
										<h3 className="text-xl font-bold text-gray-900">{election.name}</h3>
										<p className="text-gray-600">{election.startDate} to {election.endDate}</p>
									</div>
									<span className={`px-3 py-1 rounded-full text-sm font-medium ${
										election.status === 'active'
											? 'bg-green-100 text-green-800'
											: 'bg-yellow-100 text-yellow-800'
									}`}>
										{election.status.charAt(0).toUpperCase() + election.status.slice(1)}
									</span>
								</div>
								<div className="mb-4">
									<p className="text-sm text-gray-600 mb-2">Constituencies:</p>
									<div className="flex flex-wrap gap-2">
										{election.constituencies.map((c) => (
											<span key={c} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">{c}</span>
										))}
									</div>
								</div>
								<div className="flex space-x-3">
									<button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Edit</button>
									<button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">View Details</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

		
			{activeTab === 'results' && (
				<div className="space-y-6">
					<h2 className="text-2xl font-bold text-gray-900">Election Results</h2>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Select Election</label>
						<select
							className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
							value={selectedResultElection}
							onChange={(e) => setSelectedResultElection(e.target.value)}
						>
							{mockElections.map((e) => (
								<option key={e.id} value={e.id}>{e.name}</option>
							))}
						</select>
					</div>

					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<h3 className="text-xl font-bold text-gray-900 mb-6">{mockElections.find(e => e.id === selectedResultElection)?.name}</h3>
						<div className="space-y-4">
							{resultsData[selectedResultElection].map((result, index) => (
								<div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
									<div className="flex-1">
										<div className="flex justify-between items-center mb-2">
											<div>
												<h4 className="font-bold text-gray-900">{result.candidate}</h4>
												<p className="text-gray-600">{result.party}</p>
											</div>
											<div className="text-right">
												<p className="font-bold text-gray-900">{result.votes.toLocaleString()} votes</p>
												<p className="text-gray-600">{result.percentage}%</p>
											</div>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div className="bg-black h-2 rounded-full transition-all duration-500" style={{ width: `${result.percentage}%` }} />
										</div>
									</div>
								</div>
							))} 
						</div>
					</div>
				</div>
			)}

			
			{activeTab === 'settings' && (
				<div className="space-y-6">
					<h2 className="text-2xl font-bold text-gray-900">Settings</h2>
				</div>
			)}
		</div>
	);
};

export default AdminDashboard;
