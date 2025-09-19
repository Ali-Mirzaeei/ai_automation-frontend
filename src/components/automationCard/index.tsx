import { FC } from "react";
import { Automation } from "../landingPage";

interface AutomationCardProps {
  automation: Automation;
  onDelete: (id: number) => void;
}
const AutomationCard: FC<AutomationCardProps> = ({ automation, onDelete }) => (
  <div className="p-4 border rounded-lg bg-white relative shadow-sm transition-shadow hover:shadow-md">
    <button
      onClick={() => onDelete(automation.id)}
      className="absolute top-2 right-2 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold transition-colors"
      title={`Delete Automation: ${automation.name}`}
    >
      ×
    </button>
    <h3 className="font-semibold text-lg text-gray-800 pr-8">
      {automation.name}
    </h3>
    <p className="text-sm text-gray-600">{automation.description}</p>
    <p className="text-sm text-gray-800 mt-2 bg-gray-50 p-2 rounded">
      {`"${automation.natural_language_input}"`}
    </p>
    {automation.n8n_workflow_id && (
      <p className="text-xs text-green-600 mt-1 font-mono">
        Workflow ID: {automation.n8n_workflow_id}
      </p>
    )}
    <p className="text-xs text-gray-400 mt-2">
      Created: {new Date(automation.created_at).toLocaleString()}
    </p>
  </div>
);

export default AutomationCard;
