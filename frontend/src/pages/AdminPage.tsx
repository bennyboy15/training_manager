import { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Bell,
  Search
} from 'lucide-react';

export default function AdminTemplate () {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Inventory', icon: Package, active: false },
    { name: 'Team Members', icon: Users, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 text-xl font-bold flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Package size={20} />
          </div>
          {isSidebarOpen && <span>AdminOS</span>}
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                item.active ? 'bg-blue-600' : 'hover:bg-slate-800'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span>{item.name}</span>}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">User Name</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
            <p className="text-gray-500">Welcome back to your control panel.</p>
          </div>

          {/* Sample Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="h-2 w-12 bg-blue-500 rounded-full mb-4"></div>
                <p className="text-gray-500 text-sm">Metric Title</p>
                <p className="text-2xl font-bold">2,450</p>
              </div>
            ))}
          </div>

          {/* Main Table/Content Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Recent Activity</h2>
            </div>
            <div className="p-20 text-center text-gray-400">
              Table or Main Content View goes here.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
