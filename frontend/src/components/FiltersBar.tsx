function FiltersBar() {
  return (
    <div className="bg-white  p-4 rounded-xl border border-slate-200  shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-50">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Filter by Department</label>
              <select className="w-full bg-slate-50 p-2 border border-slate-400  rounded-lg text-sm focus:border-primary focus:ring-primary">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>Customer Support</option>
              </select>
            </div>
            <div className="flex-1 min-w-50">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Filter by Role</label>
              <select className="w-full bg-slate-50 p-2 border border-slate-400  rounded-lg text-sm focus:border-primary focus:ring-primary">
                <option>All Roles</option>
                <option>Senior Developer</option>
                <option>Product Designer</option>
                <option>Account Manager</option>
              </select>
            </div>
            <div className="flex-1 min-w-50">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Filter by Status</label>
              <select className="w-full bg-slate-50  p-2 border border-slate-400  rounded-lg text-sm focus:border-primary focus:ring-primary">
                <option>All Statuses</option>
                <option>Certified</option>
                <option>Onboarding</option>
                <option>Training Overdue</option>
              </select>
            </div>
            <div className="pt-5">
              <button className="flex items-center gap-2 text-slate-600  font-medium hover:text-primary transition-colors px-2">
                <span className="text-sm">Clear</span>
              </button>
            </div>
          </div>
        </div>
  )
}

export default FiltersBar