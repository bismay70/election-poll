import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import VoterCard from "./components/VoterCard/VoterCard";
import VoterDashboard from "./components/Voter/VoterDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Dashboard from "./components/Dashboard";
import NewElectionForm from "./components/NewElectionForm";
import VoterCardGenerator from "./components/Voter/VoterCardGenerator";
import MyForm from "./components/ContactUs";
import ScrollToTop from "./components/scrollToTop.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import Toaster from "react-hot-toast";

const sampleUser = {
  name: "Sachin Sethi",
  voterId: "OD123456789",
  age: 21,
  gender: "Male",
  address: "Plot No 2, Bhubaneswar, Odisha, India",
  constituency: "Bhubaneswar Central",
  photo: "https://randomuser.me/api/portraits/men/74.jpg",
  role: "voter",
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<MyForm />} />

            <Route
              path="/voter"
              element={
                <ProtectedRoute>
                  <RoleBasedRoute allowedRole="voter">
                    <VoterDashboard user={sampleUser} />
                  </RoleBasedRoute>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <RoleBasedRoute allowedRole="admin">
                    <AdminDashboard />
                  </RoleBasedRoute>
                </ProtectedRoute>
              }
            />

            <Route
              path="/new-election"
              element={
                <ProtectedRoute>
                  <RoleBasedRoute allowedRole="admin">
                    <NewElectionForm />
                  </RoleBasedRoute>
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/voter_id"
              element={
                <ProtectedRoute>
                  <div className="py-20 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-4">
                      <VoterCard user={sampleUser} />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
    </Router>
  );
}