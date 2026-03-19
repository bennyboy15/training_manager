import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ExampleChart from "../components/ExampleChart"
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios";
import type { DashboardStats } from "../types/stats";
import { Skeleton } from 'antd';

function DashboardPage() {

  const {data, isLoading, error} = useQuery<DashboardStats>({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      const result = await axiosInstance.get("/stats/dashboard")
      return result.data
    }
  });

  return (
    <div className="min-h-screen w-screen flex">
    
      <main className="flex-1 flex flex-col p-6 lg:p-10 gap-8">
        
        <Header title={"Dashboard Overview"} subtitle="Real-time monitoring of organisational business processes."/>

        {/* STATS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? <Skeleton /> :
          <>
          <StatCard title="Active Users" value={data?.userCount} trend="+12%" color="blue" icon={"activity-square"}/>
          <StatCard title="Total Sessions" value={data?.sessionCount} trend="+5%" color="green" icon={"activity-square"}/>
          <StatCard title="Total Modules" value={data?.moduleCount} trend="-2%" color="orange" icon={"activity-square"}/>
          </>
          }
        </section>

        {/* DATA VISUALIZATION SECTION */}
        <section className="flex flex-col xl:flex-row gap-6 h-125">
          
          {/* Main Graph/Chart Area */}
          <div className="flex-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800">Productivity Trends</h2>
              <button className="text-sm text-blue-600 font-semibold hover:underline">View Report</button>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                <ExampleChart/>
            </div>
          </div>

          {/* Side List / Activity Feed */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <h2 className="font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4 overflow-y-auto">
              {/* Placeholder for list items */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-3 items-start border-b border-gray-50 pb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700">Tech #1204 Booked</span>
                    <span className="text-xs text-gray-400">2 mins ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
