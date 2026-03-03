import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../shared/components/Header.jsx";
import Home from "../features/public/pages/Home.jsx";
import Footer from "../shared/components/Footer.jsx";
import VoterDashboard from "../features/voter/pages/VoterDashboard.jsx";
import Overview from "../features/admin/pages/Overview.jsx";
import CandidateManagement from "../features/admin/pages/CandidateManagement.jsx";
import Results from "../features/admin/pages/Results.jsx";
import Dashboard from "../features/public/pages/Dashboard.jsx";
import CandidateLayout from "../layouts/CandidateLayout.jsx";
import CandidateDashboard from "../features/candidate/pages/Dashboard.jsx";
import Analytics from "../features/candidate/pages/Analytics.jsx";
import Profile from "../features/candidate/pages/Profile.jsx";
import NewElectionForm from "../features/public/pages/NewElectionForm.jsx";
import MyForm from "../features/public/pages/ContactUs.jsx";
import ScrollToTop from "./scrollToTop.jsx";
import Login from "../features/auth/pages/Login.jsx";
import Register from "../features/auth/pages/Register.jsx";
import ProtectedRoute from "../features/auth/protectedRoute.jsx";
import RoleBasedRoute from "../features/auth/RoleBasedRoute.jsx";
import VoterLayout from "../layouts/VoterLayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import Settings from "../features/auth/pages/Settings.jsx";
import CastVote from "../features/voter/pages/CastVote.jsx";
import MyStatus from "../features/voter/pages/MyStatus.jsx";
import { Toaster } from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";

function AppLayout() {
  const location = useLocation();

  const isDashboard =
    location.pathname.startsWith("/voter") ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/candidate");

  return (
    <>
      <Toaster position="top-center">
        {(t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } bg-white shadow-lg rounded-xl px-5 py-4 flex items-start gap-3`}
          >
            <div>
              {t.type === "success" && (
                <CheckCircle className="text-green-600 w-5 h-5" />
              )}
              {t.type === "error" && (
                <XCircle className="text-red-600 w-5 h-5" />
              )}
            </div>

            <span className="text-sm font-medium leading-snug">
              {t.message}
            </span>
          </div>
        )}
      </Toaster>

      {!isDashboard && <Header />}

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

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRole="admin">
                <AdminLayout />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="candidates" element={<CandidateManagement />} />
          <Route path="results" element={<Results />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route
          path="/candidate"
          element={
            <ProtectedRoute>
              <RoleBasedRoute allowedRole="candidate">
                <CandidateLayout />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<CandidateDashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

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