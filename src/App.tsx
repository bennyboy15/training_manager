import { Routes, Route } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase.tsx";
import SideNav from "./components/NavBar.tsx";
import "./App.css";
import DashboardPage from "./pages/DashboardPage.tsx";
import SchedulingPage from "./pages/SchedulingPage.tsx";
import AdminPage from "./pages/AdminPage.tsx"

function App() {
  return (
    <div className="flex bg-gray-50">
      <div className="fixed top-0 left-0 z-50">
        <SideNav/>
      </div>
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/schedule" element={<SchedulingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
