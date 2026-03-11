import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";

interface EmployeeProps {
    employee: {
        id: number;
        name: string;
        role: string;
        status: string;
        hours: number;
        cost: number;
        progress: number;
        img: string;
    }
}

function EmployeeCard({employee}:EmployeeProps) {
    return (
        <div key={employee.id} className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <img alt={employee.name} className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm" src={employee.img} />
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${employee.status === 'Available' ? 'bg-green-500' : employee.status === 'Busy' ? 'bg-orange-500' : 'bg-slate-400'}`}></span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800 leading-tight">{employee.name}</p>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{employee.role}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-black ${employee.hours > 0 ? 'text-primary' : 'text-slate-300'}`}>{employee.hours}h</span>
                  </div>
                </div>
                <div className="flex justify-between items-end text-[11px] mb-1.5">
                  <span className="text-slate-400 font-medium italic">Labor Cost</span>
                  <span className="font-mono font-bold text-slate-700">${employee.cost.toFixed(2)}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200/50">
                  <div className="bg-primary h-full transition-all duration-500 rounded-full" style={{ width: `${employee.progress}%` }}></div>
                </div>
              </div>
    )
}

function SchedulingPage() {
  const [viewState, setViewState] = useState("Weekly");

  const employees = [
    { id: 1, name: "Sarah Jenkins", role: "Waitstaff", status: "Available", hours: 38, cost: 722, progress: 95, img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Marcus Lee", role: "Chef", status: "Busy", hours: 32, cost: 640, progress: 80, img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Elena Rodriguez", role: "Security", status: "Off", hours: 0, cost: 0, progress: 0, img: "https://i.pravatar.cc/150?u=3" },
  ];

  const weekDays = [
    { label: "Mon", date: 23, primary: true },
    { label: "Tue", date: 24 },
    { label: "Wed", date: 25 },
    { label: "Thu", date: 26 },
    { label: "Fri", date: 27 },
    { label: "Sat", date: 28, highlight: true },
    { label: "Sun", date: 29, highlight: true },
  ];

  return (
    <div className="font-display text-slate-900 bg-slate-50 min-h-screen flex flex-col antialiased">
      <main className="flex flex-1 overflow-hidden">
        
        {/* --- SIDEBAR --- */}
        <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-[4px_0_24px_-10px_rgba(0,0,0,0.05)] z-10">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-black text-lg tracking-tight">Team Availability</h3>
            <p className="text-xs text-slate-400 font-medium">Oct 23 - Oct 29, 2023</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
            {employees.map((emp) => (
              <EmployeeCard employee={emp}/>
            ))}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest text-[10px]">Est. Budget</span>
              <span className="text-lg font-black text-slate-900">$12,450</span>
            </div>
            <button className="w-full py-3 bg-slate-900 hover:bg-primary hover:shadow-lg hover:shadow-primary/30 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">publish</span>
              Publish Schedule
            </button>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <section className="flex-1 flex flex-col">
          
          {/* Toolbar */}
          <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-20 shadow-sm shadow-slate-200/20">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-slate-100 rounded-lg p-1">
                {['Weekly', 'Daily', 'Monthly'].map((view) => (
                  <button onClick={() => setViewState(view)} key={view} className={`px-4 py-1.5 rounded-md text-sm transition-all ${view === viewState ? 'bg-white shadow-sm font-bold text-slate-900' : 'text-slate-500 font-medium hover:text-slate-700'}`}>
                    {view}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 px-2">
                <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined leading-none">
                    <DynamicIcon name="arrow-left" />
                  </span>
                </button>
                <span className="font-bold text-sm tracking-tight text-slate-800">October 23 - 29, 2023</span>
                <button className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined leading-none">
                    <DynamicIcon name="arrow-right" />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-lg">
                    <DynamicIcon name="filter" />
                </span> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-blue-500 text-white rounded-lg shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-lg">
                    <DynamicIcon name="plus" />
                </span> NEW SHIFT
              </button>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="flex-1 overflow-auto p-6 bg-slate-50">
            <div className="min-w-250 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              
              {/* Table Header */}
              <div className="grid grid-cols-8 bg-slate-50/50 border-b border-slate-200">
                <div className="p-4 border-r border-slate-200 font-black text-[10px] uppercase tracking-widest text-slate-400 flex items-center">
                  Employees
                </div>
                {weekDays.map(day => (
                  <div key={day.date} className="p-4 border-r border-slate-200 text-center last:border-r-0">
                    <p className={`text-[10px] font-black uppercase tracking-tighter ${day.highlight ? 'text-primary' : 'text-slate-400'}`}>
                      {day.label}
                    </p>
                    <p className={`text-xl font-black leading-none mt-1 ${day.primary ? 'text-primary' : 'text-slate-800'}`}>
                      {day.date}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sample Body Row */}
              <div className="grid grid-cols-8 border-b border-slate-100 last:border-b-0 items-stretch hover:bg-slate-50/30 transition-colors group">
                <div className="p-4 border-r border-slate-200 flex items-center gap-3 bg-slate-50/10">
                  <img alt="Sarah" className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?u=1" />
                  <div>
                    <p className="text-sm font-black text-slate-800 leading-tight">Sarah J.</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Waitstaff</p>
                  </div>
                </div>

                {/* Example of a Shift Cell */}
                <div className="p-2 border-r border-slate-100 relative group/cell">
                  <div className="bg-primary/5 border border-primary/20 text-primary p-2.5 rounded-xl cursor-move shadow-[0_2px_10px_-3px_rgba(var(--primary-rgb),0.1)] hover:scale-[1.02] transition-all duration-200">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-[10px] font-black uppercase tracking-tight opacity-80">08:00 - 16:00</p>
                      <span className="w-1 h-1 rounded-full bg-primary animate-pulse"></span>
                    </div>
                    <p className="text-xs font-bold leading-tight">Morning Shift</p>
                  </div>
                </div>

                {/* Empty cells */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="p-2 border-r border-slate-100 last:border-r-0 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 w-8 h-8 rounded-full border border-dashed border-slate-300 text-slate-300 hover:text-primary hover:border-primary hover:bg-white transition-all">
                      <span className="material-symbols-outlined text-lg">
                          +
                      </span>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SchedulingPage;
