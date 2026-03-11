import { Routes, Route } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase.tsx";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.tsx";
import SchedulingPage from "./pages/SchedulingPage.tsx";
import AdminPage from "./pages/AdminPage.tsx"
import NavBar from "./components/NavBar.tsx";
import ModulesPage from "./pages/ModulesPage.tsx";
import SessionsPage from "./pages/SessionsPage.tsx";

function App() {
  return (
    <div className="flex bg-gray-50">
      <div className="fixed top-0 left-0 z-50">
        <NavBar/>
      </div>
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/schedule" element={<SchedulingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
