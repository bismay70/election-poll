import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import VoterDashboard from "./components/Voter/VoterDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Dashboard from "./components/Dashboard";
import NewElectionForm from "./components/NewElectionForm";
import MyForm from "./components/ContactUs";
import ScrollToTop from "./components/scrollToTop.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/protectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import VoterLayout from "./components/Voter/VoterLayout";
import Settings from "./components/Settings";
import CastVote from "./components/Voter/elements/CastVote";
import MyStatus from "./components/Voter/elements/MyStatus.jsx";

function AppLayout() {
  const location = useLocation();

  const isDashboard =
    location.pathname.startsWith("/voter") ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/candidate");

  return (
    <>
      {!isDashboard && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<MyForm />} />

        {/* VOTER ROUTES */}
        <Route
          path="/voter"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRole="voter">
                <VoterLayout />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<VoterDashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cast" element={<CastVote />} />
          <Route path="status" element={<MyStatus />} />
        </Route>

        {/* ADMIN ROUTES */}
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRole="admin">
                <AdminLayout />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}

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
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}