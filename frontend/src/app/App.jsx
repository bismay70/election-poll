import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "../shared/components/Header";
import Home from "../features/public/pages/Home";
import Footer from "../shared/components/Footer";
import VoterDashboard from "../features/voter/pages/VoterDashboard";
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import Dashboard from "../features/public/pages/Dashboard";
import NewElectionForm from "../features/public/pages/NewElectionForm";
import MyForm from "../features/public/pages/ContactUs";
import ScrollToTop from "./scrollToTop";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import RoleBasedRoute from "../features/auth/RoleBasedRoute";
import VoterLayout from "../layouts/VoterLayout";
// import AdminLayout from "../layouts/AdminLayout";
import Settings from "../features/voter/pages/Settings";
import CastVote from "../features/voter/pages/CastVote";
import MyStatus from "../features/voter/pages/MyStatus";
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
        <div className="mt-[0px]">
          {t.type === "success" && (
            <CheckCircle className="text-green-600 w-5 h-5" />
          )}
          {t.type === "error" && (
            <XCircle className="text-red-100 w-5 h-5" />
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
          <Route index element={<Overview />} />
          <Route path="candidates" element={<CandidateManagement />} />
          <Route path="results" element={<Results />} />
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