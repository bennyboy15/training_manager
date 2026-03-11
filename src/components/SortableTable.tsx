import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface SortableTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: keyof T;
  className?: string;
}

type SortDir = "asc" | "desc" | null;

export default function SortableTable<T extends Record<string, any>>({
  data,
  columns,
  rowKey,
  className = "",
}: SortableTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);

  const handleSort = (key: keyof T, sortable?: boolean) => {
    if (sortable === false) return;

    if (sortKey === key) {
      // Cycle through: asc -> desc -> null
      if (sortDir === "asc") {
        setSortDir("desc");
      } else if (sortDir === "desc") {
        setSortDir(null);
        setSortKey(null);
      }
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const getSortedData = () => {
    if (!sortKey || !sortDir) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const comparison = aVal < bVal ? -1 : 1;
      return sortDir === "asc" ? comparison : -comparison;
    });
  };

  const sortedData = getSortedData();

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                onClick={() => handleSort(column.key, column.sortable)}
                className={`
                  px-6 py-3 text-left text-sm font-semibold text-gray-700
                  ${column.sortable !== false ? "cursor-pointer hover:bg-gray-100" : ""}
                  transition-colors duration-150
                `}
              >
                <div className="flex items-center gap-2">
                  <span>{column.label}</span>
                  {column.sortable !== false && (
                    <div className="w-4 h-4">
                      {sortKey === column.key && sortDir === "asc" && (
                        <ChevronUp size={16} className="text-blue-600" />
                      )}
                      {sortKey === column.key && sortDir === "desc" && (
                        <ChevronDown size={16} className="text-blue-600" />
                      )}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr
              key={String(row[rowKey])}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
            >
              {columns.map((column) => (
                <td key={String(column.key)} className="px-6 py-4 text-sm text-gray-700">
                  {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
}
