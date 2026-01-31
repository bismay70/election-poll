import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import VoterCard from './components/VoterCard/VoterCard';
import VoterDashboard from './components/Voter/VoterDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Dashboard from './components/Dashboard'; 
import NewElectionForm from './components/NewElectionForm'; 
import VoterCardGenerator from './components/Voter/VoterCardGenerator';
import MyForm from './components/ContactUs';

const sampleUser = {
  name: 'Sachin Sethi',
  voterId: 'OD123456789',
  age: 21,
  gender: 'Male',
  address: 'Plot No 2, Bhubaneswar, Odisha, India',
  constituency: 'Bhubaneswar Central',
  photo: 'https://randomuser.me/api/portraits/men/74.jpg',
  role: 'voter',
};

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voter_id" element={
          <div className="min-h-screen py-20 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
              <VoterCard user={sampleUser} />
            </div>
          </div>
        } />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/voter" element={
          <VoterDashboard user={sampleUser} />
        } />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/new-election" element={<NewElectionForm />} /> 
        <Route path="/contact" element={<MyForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


