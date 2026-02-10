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
import ScrollToTop from "./components/scrollToTop.jsx";
import Login from "./components/Login.jsx";

const sampleUser = {
  name: 'Amitabh Sharma',
  voterId: 'IND19827364',
  age: 42,
  gender: 'Male',
  dob: '12/05/1982',
  address: 'H.No 45, Vasant Vihar, New Delhi, India',
  constituency: 'New Delhi Central',
  photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop', // Indian Man
  role: 'voter',
  job: 'Software Engineer',
  maritalStatus: 'Married',
  phone: '+91 98765 43210'
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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


