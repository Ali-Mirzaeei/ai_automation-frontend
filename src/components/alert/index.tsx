import { FC } from "react";

interface AlertProps {
  message: string;
  type: "success" | "error";
}

const Alert: FC<AlertProps> = ({ message, type }) => {
  const baseClasses = "px-4 py-3 rounded mb-4";
  const typeClasses = {
    success: "bg-green-100 border border-green-400 text-green-700",
    error: "bg-red-100 border border-red-400 text-red-700",
  };
  const emoji = type === "success" ? "✅" : "❌";

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      {emoji} {message}
    </div>
  );
};
export default Alert;
