import { Link } from "react-router-dom"
import Header from "../../components/Header"
import EmployeeStatCard from "../../components/EmployeeStatCard"
import { DynamicIcon } from "lucide-react/dynamic"
import FiltersBar from "../../components/FiltersBar"
import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../../utils/axios"
import type { User } from "../../types/user"
import { Skeleton } from "antd"

function EmployeesPage() {

  const { data: users, isLoading: isLoadingUsers, error: isErrorUsers, refetch:refetchUsers } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosInstance.get("/users");
      return result.data;
    },
  });

  return (
    <div className="min-h-screen w-screen flex">
      <div className="flex-1 flex flex-col p-6 lg:p-10 gap-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <Header title={"Employee Directory"} subtitle="Manage training progress for active employees." />
          <div className="flex items-center gap-2">
            <Link to="/employees/new" className="bg-blue-500 text-white px-4 py-2 shadow-xl font-semibold rounded-xl">New Employee +</Link>
            <EmployeeStatCard title={"Certified"} value={"84%"} />
            <EmployeeStatCard title={"Pending"} value={"16%"} />
          </div>
        </div>

        {/* FILTERS BAR */}
        <FiltersBar />

        {/* LIST + DETAILS */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* LHS */}
          {
          isLoadingUsers ? <Skeleton/> : 
          isErrorUsers ? (<button onClick={() => refetchUsers()}>Try Again</button>) :
          <div className="flex-1 w-full bg-white  rounded-xl border border-slate-200  shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 /50 border-b border-slate-200 ">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider hidden xl:table-cell">Role &amp; Department</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Progress</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  
                  {users?.map((user) => {
                    return (
                      <tr className="bg-primary/5 border-l-4 border-l-primary hover:bg-primary/10 transition-colors group cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-cover bg-center border border-slate-200 "></div>
                            <div>
                              <p className="text-sm font-semibold">{user.name}</p>
                              <p className="text-xs text-slate-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden xl:table-cell">
                          <p className="text-sm font-medium">Software Engineer</p>
                          <p className="text-xs text-slate-500">Engineering</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ">{user.role}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-24 bg-slate-100  rounded-full h-1.5">
                            <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">100%</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-2 text-primary bg-primary/10 rounded-lg" title="View Details">
                              <DynamicIcon name="eye" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 /50 flex items-center justify-between border-t border-slate-200 ">
              <p className="text-xs text-slate-500">Showing 1 to 3 of 1,248</p>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200  transition-colors">
                  <DynamicIcon name="arrow-left" />
                </button>
                <button className="px-3 py-1 text-xs font-bold rounded-lg bg-primary text-slate-400">1</button>
                <button className="px-3 py-1 text-xs font-bold rounded-lg hover:bg-slate-200 ">2</button>
                <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200  transition-colors">
                  <DynamicIcon name="arrow-right" />
                </button>
              </div>
            </div>
          </div>
          }

          {/* RHS */}
          <aside className="w-full lg:w-120 bg-white  rounded-xl border border-slate-200  shadow-xl overflow-hidden flex flex-col h-full lg:sticky lg:top-">
            <div className="p-4 border-b border-slate-200  flex items-center justify-between bg-slate-50 /30">
              <div className="flex items-center gap-2">
                <DynamicIcon name="chart-line" />
                <h3 className="font-bold text-slate-900 ">Training Insights</h3>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-200  rounded-lg transition-all">
                <DynamicIcon name="circle-x" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-cover bg-center border-2 border-primary/20 shadow-md"></div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900  leading-tight">Alex Rivera</h4>
                  <p className="text-sm text-slate-500">Engineering • Senior SWE</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    <span className="text-[11px] font-bold text-green-600 uppercase tracking-tight">Active Duty</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative size-14 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-slate-100 " cx="18" cy="18" fill="none" r="16" stroke-width="3"></circle>
                        <circle className="stroke-green-500" cx="18" cy="18" fill="none" r="16" stroke-dasharray="100, 100" stroke-width="3"></circle>
                      </svg>
                      <span className="absolute text-[10px] font-bold text-green-600">100%</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-slate-900 ">Engineering Essentials</h5>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-green-100 text-green-700  font-bold uppercase">Done</span>
                      </div>
                      <p className="text-[11px] text-slate-500">All 2 modules mastered</p>
                    </div>
                  </div>
                  <div className="pl-1 space-y-1.5 border-l-2 border-slate-100  ml-7">
                    <div className="flex items-center justify-between text-xs text-green-500 px-2 py-1">
                      <span className="text-slate-600 ">System Architecture</span>
                      <DynamicIcon name="check-circle" size={15} />
                    </div>
                    <div className="flex items-center justify-between text-xs text-green-500 px-2 py-1">
                      <span className="text-slate-600 ">Security Fundamentals</span>
                      <DynamicIcon name="check-circle" size={15} />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative size-14 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-slate-100 " cx="18" cy="18" fill="none" r="16" stroke-width="3"></circle>
                        <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" stroke-dasharray="60, 100" stroke-width="3"></circle>
                      </svg>
                      <span className="absolute text-[10px] font-bold text-primary">60%</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-slate-900 ">Cloud Operations</h5>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-700  font-bold uppercase flex items-center gap-1">
                          <DynamicIcon name="triangle-alert" size={15} /> Action Needed
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">1 module remaining</p>
                    </div>
                  </div>
                  <div className="pl-1 space-y-1.5 border-l-2 border-primary/20 ml-7">
                    <div className="flex items-center justify-between text-xs px-2 py-1 bg-primary/5 rounded">
                      <span className="font-bold text-slate-900 ">CI/CD Pipelines</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-slate-200  rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[60%]"></div>
                        </div>
                        <span className="text-[10px] font-bold text-primary">60%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs px-2 py-1 opacity-60">
                      <span className="text-slate-500 italic">Advanced Kubernetes</span>
                      <DynamicIcon name="lock" size={15} />
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative size-14 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <circle className="stroke-slate-100 " cx="18" cy="18" fill="none" r="16" stroke-width="3"></circle>
                        <circle className="stroke-red-500" cx="18" cy="18" fill="none" r="16" stroke-dasharray="15, 100" stroke-width="3"></circle>
                      </svg>
                      <span className="absolute text-[10px] font-bold text-red-600">15%</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-slate-900 ">SecOps 2024</h5>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold uppercase flex items-center gap-1">
                          <DynamicIcon name="triangle-alert" size={15} /> Overdue
                        </span>
                      </div>
                      <p className="text-[11px] text-red-500 font-medium">Missed deadline: Oct 01</p>
                    </div>
                  </div>
                  <div className="pl-1 space-y-1.5 border-l-2 border-red-500/20 ml-7">
                    <div className="flex items-center justify-between text-xs px-2 py-1 text-red-700 bg-red-50 rounded">
                      <span className="font-bold ">GDPR Compliance</span>
                      <DynamicIcon name="triangle-alert" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-slate-200  grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100  text-slate-900  rounded-lg text-sm font-bold hover:bg-slate-200  transition-colors">
                  <DynamicIcon name="bell-ring" />
                  <span>Remind</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                  <DynamicIcon name="file-plus" />
                  <span>Assign Kit</span>
                </button>
              </div>
            </div>
          </aside>
        </div>

      </div>

      <Link to="/employees/new" className="md:hidden fixed bottom-6 right-6 size-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <DynamicIcon name="user-round-plus" />
      </Link>
    </div>
  )
}

export default EmployeesPage