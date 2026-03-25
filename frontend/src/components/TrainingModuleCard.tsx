import type { Module } from "../types/module"

function TrainingModuleCard({module}:{module: Module}) {
    return (
        <div className="group bg-white rounded-xl border-2 border-primary/10 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col ring-2 ring-primary/5">
            <div className="h-40 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-slate-900/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary/20" data-alt="Abstract architectural lines representing engineering kit"></div>
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded">{module.trainingType}</span>
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{module.title}</h3>
                    <button className="text-slate-400 hover:text-slate-600-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
                <p className="text-sm text-slate-500 mb-6">{module.description}</p>
                <div className="bg-slate-50/50 rounded-lg p-3 mb-6 flex justify-between">
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center px-4">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Duration</p>
                        <p className="text-lg font-bold text-primary tracking-tight">{module.durationMinutes / 60}h</p>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center px-4">
                        <p className="text-[10px] uppercase font-bold text-slate-400">Expiry</p>
                        <p className="text-lg font-bold text-primary tracking-tight">{module.expiryMonths}</p>
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
    )
}

export default TrainingModuleCard