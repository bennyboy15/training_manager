import { Routes, Route, useLocation } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase.tsx";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.tsx";
import SchedulingPage from "./pages/SchedulingPage.tsx";
import AdminPage from "./pages/AdminPage.tsx"
import NavBar from "./components/NavBar.tsx";
import ModulesPage from "./pages/Modules/ModulesPage.tsx";
import SessionsPage from "./pages/Sessions/SessionsPage.tsx";
import EmployeesPage from "./pages/Employees/EmployeesPage.tsx";
import EmployeesNewPage from "./pages/Employees/EmployeesNewPage.tsx";
import LoginPage from "./pages/Auth/LoginPage.tsx";
import ModulesNewPage from "./pages/Modules/ModulesNewPage.tsx";
import SignupPage from "./pages/Auth/SignupPage.tsx";
import SessionsNewPage from "./pages/Sessions/SessionsNewPage.tsx";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./stores/authStore.ts";

export function ProtectedRoute() {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  const location = useLocation();

  // ONLY SHOW NAV BAR IF NOT IN AUTH ROUTES
  const noNavPages = ["/login", "/signup"];
  const showNav = !noNavPages.includes(location.pathname);

  return (
    <div className="bg-gray-50">
      {showNav && (
        <div className="fixed top-0 left-0 z-50">
          <NavBar />
        </div>
      )}
      <div className={showNav ? "mt-16" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/modules/new" element={<ModulesNewPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/sessions/new" element={<SessionsNewPage />} />
            <Route path="/employees" element={<EmployeesPage />} />
            <Route path="/employees/new" element={<EmployeesNewPage />} />
            <Route path="/schedule" element={<SchedulingPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* Optional: Dev-only routes */}
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App