import React from "react";
import Spinner from "../spinner";
interface FormProps {
  onSubmit?: () => void;
  isLoading?: boolean;
  userInput?: string;
  setUserInput?: (value: string) => void;
}

function Form({ onSubmit, isLoading, setUserInput, userInput }: FormProps) {
  const handleOnClick = () => {
    setUserInput?.("");
    onSubmit?.();
  };
  return (
    <div className="max-w-[768px] mx-auto">
      <div className="mb-4">
        <label
          htmlFor="prompt"
          className="block text-sm font-medium text-textSecondary mb-2"
        >
          Describe your idea
        </label>
        <textarea
          id="prompt"
          value={userInput}
          onChange={(e) => setUserInput?.(e.target.value)}
          placeholder="Start generating with a simple conversation..."
          className="w-full px-4 py-3 text-textPrimary outline-0 min-h-30 bg-background rounded-lg shadow-xl resize-none"
          rows={3}
          disabled={isLoading}
        />
      </div>

      <button
        onClick={handleOnClick}
        disabled={isLoading || !userInput?.trim()}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        {isLoading ? (
          <>
            <Spinner />
            Analyzing...
          </>
        ) : (
          "Create"
        )}
      </button>
    </div>
  );
}

export default Form;
