
export default function AdminTemplate () {

  return (
    <div className="min-h-screen bg-gray-50 flex">


      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
    

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
