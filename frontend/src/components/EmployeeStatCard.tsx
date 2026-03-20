import { DynamicIcon } from "lucide-react/dynamic"

type Props = {
    title:string;
    value:string;
}

function EmployeeStatCard({title, value}: Props) {
    return (
        <div className="bg-white  p-3 rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
            <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                <DynamicIcon name="check-circle" />
            </div>
            <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{title}</p>
                <p className="text-lg font-bold">{value}</p>
            </div>
        </div>
    )
}

export default EmployeeStatCard