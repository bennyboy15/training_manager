import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  color?: "green" | "red" | "orange" | "blue";
  icon: IconName;
}

const colorStyles = {
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
};

export default function StatCard({
  title,
  value,
  trend,
  color = "blue",
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition">
      
      <div className="space-y-1">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl font-semibold text-gray-900">{value}</p>

        {trend && (
          <p
            className={`text-sm font-medium ${
              trend.startsWith("-") ? "text-red-500" : "text-green-500"
            }`}
          >
            {trend} from last week
          </p>
        )}
      </div>

      <div
        className={`p-3 rounded-xl flex items-center justify-center ${colorStyles[color]}`}
      >
        <DynamicIcon name={icon} size={24} />
      </div>
    </div>
  );
}