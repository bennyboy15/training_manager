import { Routes, Route, useLocation } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase.tsx";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.tsx";
import SchedulingPage from "./pages/SchedulingPage.tsx";
import AdminPage from "./pages/AdminPage.tsx"
import NavBar from "./components/NavBar.tsx";
import ModulesPage from "./pages/Modules/ModulesPage.tsx";
import SessionsPage from "./pages/SessionsPage.tsx";
import EmployeesPage from "./pages/Employees/EmployeesPage.tsx";
import EmployeesNewPage from "./pages/Employees/EmployeesNewPage.tsx";
import LoginPage from "./pages/Auth/LoginPage.tsx";
import ModulesNewPage from "./pages/Modules/ModulesNewPage.tsx";
import SignupPage from "./pages/Auth/SignupPage.tsx";

function App() {
  const location = useLocation();
  const noNavPages = ["/login", "/signup"];
  const showNav = !noNavPages.includes(location.pathname);

  return (
    <div className="bg-gray-50">
      {showNav && <div className="fixed top-0 left-0 z-50">
        <NavBar />
      </div>
      }
      <div className={showNav ? "mt-16" : ""}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/new" element={<ModulesNewPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/new" element={<EmployeesNewPage />} />
          <Route path="/schedule" element={<SchedulingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
