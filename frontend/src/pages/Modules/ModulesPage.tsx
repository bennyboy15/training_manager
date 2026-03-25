import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { DynamicIcon } from 'lucide-react/dynamic'
import TrainingModuleCard from '../../components/TrainingModuleCard'
import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../utils/axios'
import type { Module } from '../../types/module'
import { Skeleton } from 'antd'

function ModulesPage() {

  const { data: modules, isLoading: isModulesLoading, error: isModulesError } = useQuery({
    queryKey: ["modules"],
    queryFn: async () => {
      const response = await axiosInstance.get("/modules");
      return response.data;
    }
  });

  return (
    <>
      <body className="bg-background-light font-display text-slate-900 min-h-screen">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="flex-1 mx-auto w-full px-6 py-8">

              {/* HEADER */}
              <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                <Header title="Training Library" subtitle='Centralized management for modules, kits, and role-based training paths.' />
                <Link to="/modules/new" className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-blue-500 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  <DynamicIcon name="plus" />
                  <span>Create New</span>
                </Link>
              </div>

              {/* SEARCH BAR */}
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
                      <DynamicIcon name="chevron-down" />
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-600 px-4 hover:bg-slate-200-700 transition-colors">
                      <span className="text-sm font-semibold">Engineering</span>
                      <DynamicIcon name="chevron-down" />
                    </button>
                    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-600 px-4 hover:bg-slate-200-700 transition-colors">
                      <span className="text-sm font-semibold">Compliance</span>
                      <DynamicIcon name="chevron-down" />
                    </button>
                  </div>
                </div>

                <div className="relative w-full">
                  <label className="flex flex-col w-full h-12">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-slate-200 focus-within:border-primary transition-colors bg-slate-50">
                      <div className="text-slate-400 flex items-center justify-center pl-4">
                        <DynamicIcon name="search" />
                      </div>
                      <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent text-slate-900 focus:ring-0 h-full placeholder:text-slate-500 px-4 text-base" placeholder="Search training content, keywords, or authors..." value="" />
                      <div className="flex items-center pr-4">
                        <span className="text-xs font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 uppercase">Cmd + K</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* GRID OF MODULES */}
              {
                isModulesLoading ? <Skeleton className='mt-8' /> :
                isModulesError ? <div className='mt-8'>ERROR loading modules</div> :
                  (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {modules?.map((module: Module) => (
                      <TrainingModuleCard key={module.id} module={module} />
                    ))}
                  </div>)
              }

              <div className="mt-12 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-slate-500">Showing 5 of 142 total assets in library</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm font-bold text-slate-400 hover:text-primary transition-colors">Previous</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-400 hover:text-primary transition-colors">1</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-800 hover:text-primary transition-colors">2</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-400 hover:text-primary transition-colors">3</button>
                  <button className="px-3 py-1 text-sm font-bold text-slate-400 hover:text-primary transition-colors">Next</button>
                </div>
              </div>
            </main>
          </div>
        </div >
      </body >
    </>
  )
}

export default ModulesPage