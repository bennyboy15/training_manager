import { forwardRef, type HTMLAttributes } from "react";
import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";
import { cn } from "../utils/cn";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  onClose?: () => void;
}

const variants = {
  success: {
    container: "bg-green-50 border-green-200 text-green-800",
    icon: CheckCircle,
    iconColor: "text-green-400",
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-800",
    icon: XCircle,
    iconColor: "text-red-400",
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200 text-yellow-800",
    icon: AlertCircle,
    iconColor: "text-yellow-400",
  },
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-800",
    icon: Info,
    iconColor: "text-blue-400",
  },
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, onClose, ...props }, ref) => {
    const { container, icon: Icon, iconColor } = variants[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "border rounded-md p-4 flex items-start space-x-3",
          container,
          className
        )}
        {...props}
      >
        <Icon className={cn("flex-shrink-0 w-5 h-5 mt-0.5", iconColor)} />
        <div className="flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";