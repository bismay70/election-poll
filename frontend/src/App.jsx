import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import VoterCard from './components/VoterCard/VoterCard';
import VoterDashboard from './components/Voter/VoterDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Dashboard from './components/Dashboard'; // <-- Add this import
import NewElectionForm from './components/NewElectionForm'; // <-- Add this import
import VoterCardGenerator from './components/Voter/VoterCardGenerator';
import ContactUs from './components/ContactUs';

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
        <Route path="/dashboard" element={<Dashboard />} /> {/* <-- Add this route */}
        <Route path="/new-election" element={<NewElectionForm />} /> {/* <-- Add this route */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

// Inside AdminDashboard.jsx, e.g., below stats or in overview tab
<div className="grid grid-cols-2 gap-4 mt-8">
  <img src="/images/Screenshot 2025-08-16 131130.png" alt="Screenshot 1" className="rounded-lg shadow-md w-full" />
  <img src="/images/Screenshot 2025-08-16 130700.png" alt="Screenshot 2" className="rounded-lg shadow-md w-full" />
  <img src="/images/Screenshot 2025-08-16 130738.png" alt="Screenshot 3" className="rounded-lg shadow-md w-full" />
  <img src="/images/Screenshot 2025-08-16 130806.png" alt="Screenshot 4" className="rounded-lg shadow-md w-full" />
</div>


