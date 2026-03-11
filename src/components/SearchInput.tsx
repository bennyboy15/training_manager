import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "../utils/cn";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onChange, onClear, placeholder = "Search...", value, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(value?.toString() || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange(newValue);
    };

    const handleClear = () => {
      setInternalValue("");
      onChange("");
      onClear?.();
    };

    return (
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          ref={ref}
          type="text"
          className={cn(
            "w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "placeholder-gray-400",
            className
          )}
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          {...props}
        />
        {internalValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";