import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: "light" | "default" | "dark";
  orientation?: "horizontal" | "vertical";
}

const variants = {
  light: "border-gray-100",
  default: "border-gray-200",
  dark: "border-gray-400",
};

export const Divider = ({
  className,
  variant = "default",
  orientation = "horizontal",
  ...props
}: DividerProps) => {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? `w-full border-t ${variants[variant]}`
          : `h-full border-l ${variants[variant]}`,
        className
      )}
      {...props}
    />
  );
};
