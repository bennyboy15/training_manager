import { Link } from "react-router-dom"
import Header from "../../components/Header"
import { DynamicIcon } from "lucide-react/dynamic"
import { Button } from "antd"

function SessionsPage() {
  return (
    <>
      <div className="min-h-screen w-screen flex bg-slate-50">
        <main className="flex-1 flex flex-col p-6 lg:p-10 gap-8 mx-auto">

          {/* HEADER + BUTTONS */}
          <div className="flex justify-between">
            <Header title="Session Overview" subtitle="Manage and monitor technical training modules for the engineering department." />
            <div className="flex items-center gap-3 p-1">
              <Button variant="solid" color="blue">
                <Link to="/sessions/new" className="font-semibold">New Session +</Link>
              </Button>
              <button className="px-6 py-2 bg-white text-blue-600 shadow-sm rounded-lg text-sm font-bold flex items-center gap-2 transition-all h-full">
                <DynamicIcon name="calendar" />
                Calendar
              </button>
              <button className="px-6 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-bold flex items-center gap-2 transition-all h-full">
                <DynamicIcon name="list" />
                List
              </button>
            </div>
          </div>

          {/* MAIN */}
          <div className="space-y-8 mx-auto w-full">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-3 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-300/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">October 2023</h3>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-slate-100 rounded-md">
                        <DynamicIcon name="chevron-left" />
                        </button>
                      <button className="p-1 hover:bg-slate-100 rounded-md">
                        <DynamicIcon name="chevron-right" />
                        </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 text-center">
                    <span className="text-[10px] font-bold text-slate-400">S</span>
                    <span className="text-[10px] font-bold text-slate-400">M</span>
                    <span className="text-[10px] font-bold text-slate-400">T</span>
                    <span className="text-[10px] font-bold text-slate-400">W</span>
                    <span className="text-[10px] font-bold text-slate-400">T</span>
                    <span className="text-[10px] font-bold text-slate-400">F</span>
                    <span className="text-[10px] font-bold text-slate-400">S</span>
                    <span className="text-xs py-2 text-slate-300">28</span>
                    <span className="text-xs py-2 text-slate-300">29</span>
                    <span className="text-xs py-2 text-slate-300">30</span>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">1</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">2</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">3</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">4</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">5</button>
                    <button className="text-xs py-2 font-medium bg-primary border border-slate-200 text-blue-700 shadow-lg shadow-blue-500/30 rounded-lg">6</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">7</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">8</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">9</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">10</button>
                    <button className="text-xs py-2 font-medium hover:bg-blue-50 rounded-lg">11</button>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-300/50 space-y-6">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Status</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input className="rounded-md border-slate-300 text-blue-600 focus:ring-primary h-4 w-4" type="checkbox" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Upcoming</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input className="rounded-md border-slate-300 text-blue-600 focus:ring-primary h-4 w-4" type="checkbox" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">In-Progress</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input className="rounded-md border-slate-300 text-blue-600 focus:ring-primary h-4 w-4" type="checkbox" />
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Completed</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Department</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium text-slate-600 focus:ring-2 focus:ring-primary/20">
                      <option>All Departments</option>
                      <option>Engineering</option>
                      <option>Architecture</option>
                      <option>Systems</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Trainer</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg text-sm font-medium text-slate-600 focus:ring-2 focus:ring-primary/20">
                      <option>All Trainers</option>
                      <option>Sarah Drasner</option>
                      <option>David Khourshid</option>
                      <option>Cassidy Williams</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-300/50 overflow-hidden">
                  <div className="grid grid-cols-7 border-b border-slate-300">
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Mon</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Tue</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Wed</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Thu</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Fri</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Sat</div>
                    <div className="py-4 text-center text-[10px] font-black text-slate-400 uppercase border-r border-slate-300 last:border-r-0">Sun</div>
                  </div>
                  <div className="grid grid-cols-7 grid-rows-5 h-150">
                    <div className="p-2 border-r border-b border-slate-300 bg-slate-50/50"></div>
                    <div className="p-2 border-r border-b border-slate-300 bg-slate-50/50"></div>
                    <div className="p-2 border-r border-b border-slate-300 bg-slate-50/50"></div>
                    <div className="p-2 border-r border-b border-slate-300 bg-slate-50/50"></div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">1</span>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">2</span>
                    </div>
                    <div className="p-2 border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">3</span>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">4</span>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">5</span>
                      <div className="mt-1 p-1.5 bg-blue-100/50 rounded-lg border-l-4 border-blue-500">
                        <p className="text-[9px] font-black text-blue-700 leading-tight">DIAGNOSE K220</p>
                        <p className="text-[8px] text-blue-600 font-medium">Online • 10:00 AM</p>
                      </div>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300 bg-primary/5">
                      <span className="text-xs font-black text-blue-600">6</span>
                      <div className="mt-1 p-1.5 bg-emerald-100/50 rounded-lg border-l-4 border-emerald-500">
                        <p className="text-[9px] font-black text-emerald-700 leading-tight">CIRCUIT REPAIR</p>
                        <p className="text-[8px] text-emerald-600 font-medium">In-Person • 02:00 PM</p>
                      </div>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">7</span>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">8</span>
                      <div className="mt-1 p-1.5 bg-blue-100/50 rounded-lg border-l-4 border-blue-500">
                        <p className="text-[9px] font-black text-blue-700 leading-tight">QA PROTOCOLS</p>
                        <p className="text-[8px] text-blue-600 font-medium">Online • 09:00 AM</p>
                      </div>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">9</span>
                    </div>
                    <div className="p-2 border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">10</span>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300"><span className="text-xs font-bold text-slate-400">11</span></div>
                    <div className="p-2 border-r border-b border-slate-300"><span className="text-xs font-bold text-slate-400">12</span></div>
                    <div className="p-2 border-r border-b border-slate-300"><span className="text-xs font-bold text-slate-400">13</span></div>
                    <div className="p-2 border-r border-b border-slate-300"><span className="text-xs font-bold text-slate-400">14</span></div>
                    <div className="p-2 border-r border-b border-slate-300">
                      <span className="text-xs font-bold text-slate-400">15</span>
                      <div className="mt-1 p-1.5 bg-emerald-100/50 rounded-lg border-l-4 border-emerald-500">
                        <p className="text-[9px] font-black text-emerald-700 leading-tight">ADVANCED SHELL</p>
                        <p className="text-[8px] text-emerald-600 font-medium">In-Person • 11:30 AM</p>
                      </div>
                    </div>
                    <div className="p-2 border-r border-b border-slate-300"><span className="text-xs font-bold text-slate-400">16</span></div>
                    <div className="p-2 border-b border-slate-300"><span className="text-xs font-bold text-slate-400">17</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">18</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">19</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">20</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">21</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">22</span></div>
                    <div className="p-2 border-r border-slate-300"><span className="text-xs font-bold text-slate-400">23</span></div>
                    <div className="p-2 border-slate-300"><span className="text-xs font-bold text-slate-400">24</span></div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Upcoming Sessions</h3>
                  <a className="text-[10px] font-bold text-blue-600 hover:underline" href="#">VIEW ALL</a>
                </div>
                <div className="group bg-white p-5 rounded-xl shadow-sm border border-slate-300/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-black uppercase tracking-tight">Online</span>
                    <button className="text-slate-300 hover:text-slate-600"><DynamicIcon name="ellipsis"/></button>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Diagnose K220 Issues</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <img className="w-5 h-5 rounded-full ring-2 ring-white" data-alt="close-up of a professional woman trainer with glasses smiling against a clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLXWYTdLuDGUBxEdEoyAR898izyOgeozm9gwvWgp_hxnZ9h6ZjCnhzL4K1L4iYh9X97PufJona7ASph32sZXS3o6ZJB1VytAgiVDzu6Fvu9b1COIrPThMPPeGEF6I_WrDayDk-vqv0_H-3aR4PrcCHvE11vXl-bReRBzd7qN9Dq5CJ-Lzhs0UqoX32t_F-mZ9DEXxnLkhhBzS7j9xi1mE9dIYacWRfT2erj9j7a3_xDXNqwVlLKBP1yafX5B1FCpgp72xDk7cCc_M" />
                    <span className="text-[11px] font-medium text-slate-500">Sarah Drasner</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <DynamicIcon name="clock" size={15}/>
                      <span className="text-[11px] font-medium">Oct 05 • 10:00 AM</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-slate-500">Enrollment</span>
                        <span className="text-slate-900">18/25</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[72%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group bg-white p-5 rounded-xl shadow-sm border border-slate-300/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-[10px] font-black uppercase tracking-tight">In-Person</span>
                    <button className="text-slate-300 hover:text-slate-600"><DynamicIcon name="ellipsis"/></button>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Circuit Board Repair</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <img className="w-5 h-5 rounded-full ring-2 ring-white" data-alt="headshot of a young male engineer in a denim shirt with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCgRIWpPV5LqIov4VL5VB0gTNkwj3xTHZNMBiI_KlrEn_FmAZ6hY2nEA9mvkgpu_jEknFn8mMfNRHV9sCaudjsg3jAoFYnZjbz7CcicHm4PRxjGtufT6OFm3OLnbqly9Dc_yeUQlTusQ0fG1RZnY92DmPixiiZpT4xHbTuadGPS6BscChOzvMC9g0yVNSfGWkW494KOgrFAIg6101RHnt329Ba6v-xM2d1iwfGZIwIOmJm1Qajj5qjJljM-qp2gaHogf-lfMe-kH4" />
                    <span className="text-[11px] font-medium text-slate-500">David Khourshid</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <DynamicIcon name="clock" size={15}/>
                      <span className="text-[11px] font-medium">Lab B • Workshop Floor</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-slate-500">Enrollment</span>
                        <span className="text-slate-900">12/12</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full rounded-full"></div>
                      </div>
                      <p className="text-[9px] font-bold text-emerald-600 text-center pt-1 uppercase tracking-wide">Capacity Reached</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-linear-to-br from-primary to-blue-800 p-6 rounded-xl shadow-xl shadow-primary/20">
                  <div className="relative z-10 space-y-4">
                    <h5 className="text-[10px] font-black text-white/70 uppercase tracking-widest">Training Engagement</h5>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-black text-white leading-none">94.2%</span>
                      <span className="text-emerald-300 text-xs font-bold mb-1 flex items-center"><DynamicIcon name="arrow-up"/> 3%</span>
                    </div>
                    <p className="text-white/80 text-[11px] font-medium leading-relaxed">Engagement is up since the introduction of the Circuit Repair modules last month.</p>
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 py-2 rounded-lg text-white text-[11px] font-bold transition-colors">View detailed report</button>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
            <div className="md:hidden fixed bottom-6 right-6 z-50">
              <button className="h-14 w-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-2xl">add</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SessionsPage