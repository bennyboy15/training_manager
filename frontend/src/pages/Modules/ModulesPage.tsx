import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { DynamicIcon } from 'lucide-react/dynamic'

function ModulesPage() {
  return (
    <>
      <body className="bg-background-light font-display text-slate-900 min-h-screen">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="flex-1 mx-auto w-full px-6 py-8">

              <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                <Header title="Training Library" subtitle='Centralized management for modules, kits, and role-based training paths.'/>
                <Link to="/modules/new" className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-blue-500 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  <DynamicIcon name="plus"/>
                  <span>Create New</span>
                </Link>
              </div>

              <div className="flex flex-col gap-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex border-b border-slate-200 gap-8">
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 transition-all" href="#">
                      <span className="text-sm font-bold leading-normal tracking-tight">Modules</span>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 hover:text-slate-700-200 transition-all" href="#">
                      <span className="text-sm font-bold leading-normal tracking-tight">Training Kits</span>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 pb-3 hover:text-slate-700-200 transition-all" href="#">
                      <span className="text-sm font-bold leading-normal tracking-tight">Job Title Kits</span>
                    </a>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-1">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary/10 text-primary border border-primary/20 px-4 transition-colors">
                      <span className="text-sm font-semibold">All Departments</span>
                      <DynamicIcon name="chevron-down"/>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-600 px-4 hover:bg-slate-200-700 transition-colors">
                      <span className="text-sm font-semibold">Engineering</span>
                      <DynamicIcon name="chevron-down"/>
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-600 px-4 hover:bg-slate-200-700 transition-colors">
                      <span className="text-sm font-semibold">Compliance</span>
                      <DynamicIcon name="chevron-down"/>
                    </button>
                  </div>
                </div>

                <div className="relative w-full">
                  <label className="flex flex-col w-full h-12">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-slate-200 focus-within:border-primary transition-colors bg-slate-50">
                      <div className="text-slate-400 flex items-center justify-center pl-4">
                        <DynamicIcon name="search"/>
                      </div>
                      <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent text-slate-900 focus:ring-0 h-full placeholder:text-slate-500 px-4 text-base" placeholder="Search training content, keywords, or authors..." value="" />
                      <div className="flex items-center pr-4">
                        <span className="text-xs font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 uppercase">Cmd + K</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                  <div className="h-40 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-primary/10" data-alt="Abstract blue geometric pattern for module header"></div>
                    <div className="absolute top-4 right-4 bg-white/90/90 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-primary uppercase border border-primary/20">
                      <span className="material-symbols-outlined text-sm">verified_user</span> Cybersecurity
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">Cybersecurity 101: Phishing Awareness</h3>
                      <button className="text-slate-400 hover:text-slate-600-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">Learn to identify and report suspicious emails, links, and social engineering attempts in a corporate environment.</p>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span> 45m
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">groups</span> 1,240
                        </div>
                      </div>
                      <span className="italic">Updated 2d ago</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl border-2 border-primary/10 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col ring-2 ring-primary/5">
                  <div className="h-40 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-tr from-slate-900/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-primary/20" data-alt="Abstract architectural lines representing engineering kit"></div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded">Kit Bundle</span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">Engineering Essentials Kit</h3>
                      <button className="text-slate-400 hover:text-slate-600-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">A comprehensive bundle covering safety protocols, tool management, and quality control for junior engineers.</p>
                    <div className="bg-slate-50/50 rounded-lg p-3 mb-6 flex justify-between">
                      <div className="text-center px-4">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Modules</p>
                        <p className="text-lg font-bold text-primary tracking-tight">08</p>
                      </div>
                      <div className="w-px bg-slate-200"></div>
                      <div className="text-center px-4">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
                        <p className="text-lg font-bold text-primary tracking-tight">12h</p>
                      </div>
                      <div className="w-px bg-slate-200"></div>
                      <div className="text-center px-4">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Enrolled</p>
                        <p className="text-lg font-bold text-primary tracking-tight">342</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex -space-x-2">
                        <div className="size-6 rounded-full border-2 border-white bg-slate-300" data-alt="Reviewer avatar"></div>
                        <div className="size-6 rounded-full border-2 border-white bg-slate-400" data-alt="Reviewer avatar"></div>
                        <div className="size-6 rounded-full border-2 border-white bg-primary/30 flex items-center justify-center text-[8px] font-bold text-primary">+12</div>
                      </div>
                      <span className="italic">Updated Oct 12</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                  <div className="h-40 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-emerald-500/10" data-alt="Green environmental leaves pattern for safety module"></div>
                    <div className="absolute top-4 right-4 bg-white/90/90 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase border border-green-500/20">
                      <span className="material-symbols-outlined text-sm">health_and_safety</span> Safety
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">Hazardous Materials Handling</h3>
                      <button className="text-slate-400 hover:text-slate-600-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">Standard operating procedures for the transportation and storage of className A materials.</p>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span> 2h 15m
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">groups</span> 890
                        </div>
                      </div>
                      <span className="italic">Updated 1w ago</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col">
                  <div className="h-40 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-amber-500/10" data-alt="Orange professional workspace abstract pattern"></div>
                    <div className="absolute top-4 right-4 bg-white/90/90 backdrop-blur rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase border border-orange-500/20">
                      <span className="material-symbols-outlined text-sm">work</span> Operations
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">Customer Success Framework</h3>
                      <button className="text-slate-400 hover:text-slate-600-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-2">Understanding the TrainMaster Pro lifecycle and how to drive client engagement through reporting.</p>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span> 1h 30m
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">groups</span> 2,100
                        </div>
                      </div>
                      <span className="italic">Updated 3d ago</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-slate-900 rounded-xl border-none overflow-hidden hover:shadow-2xl transition-all flex flex-col relative">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="bg-primary/20 text-primary border border-primary/40 text-[9px] font-black uppercase px-2 py-1 rounded-full">Pro Level Path</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col text-white">
                    <div className="size-12 rounded-lg bg-primary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-3xl">developer_mode_tv</span>
                    </div>
                    <h3 className="text-xl font-black mb-2 leading-tight">Senior DevOps Engineer Kit</h3>
                    <p className="text-sm text-slate-400 mb-8">Role-specific bundle comprising of 4 Training Kits (32 modules total) required for level progression.</p>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Kits Included</span>
                        <span className="text-lg font-bold">04</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Total Enrolled</span>
                        <span className="text-lg font-bold">85</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Completion</span>
                        <span className="text-lg font-bold">45%</span>
                      </div>
                    </div>
                    <button className="w-full h-11 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm">Manage Path</button>
                  </div>
                </div>

                <div className="group border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-12 hover:border-primary/50 transition-all cursor-pointer">
                  <div className="size-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined">add_circle</span>
                  </div>
                  <p className="text-sm font-bold text-slate-500">Create New Module</p>
                </div>
              </div>

              <div className="mt-12 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-500">Showing 5 of 142 total assets in library</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors">Previous</button>
                  <button className="px-3 py-1 text-sm font-bold bg-primary text-blue-500 rounded-md">1</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors">2</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors">3</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors">Next</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  )
}

export default ModulesPage