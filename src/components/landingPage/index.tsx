import React from "react";

import { useState } from "react";
import Header from "../header";
import Form from "../form";

export type Automation = {
  id: number;
  name: string;
  description: string;
  natural_language_input: string;
  n8n_workflow_id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

interface ParsedData {
  status: "ready_to_create" | "needs_confirmation" | "error";
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parsed_data?: any;
}

// --- API Configuration ---
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

function LandingPage() {
  // --- State Management ---
  const [userInput, setUserInput] = useState("");
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);

  // Using a single status object for loading and error states
  const [status, setStatus] = useState({
    isLoading: true,
    isAnalyzing: false,
    error: "",
    success: "",
  });

  const handleAnalyze = async () => {
    if (!userInput.trim()) return;
    setStatus((prev) => ({ ...prev, isAnalyzing: true, error: "" }));
    setParsedData(null);
    try {
      const response = await fetch(`${API_URL}/process-ai/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput }),
      });
      const data = await response.json();
      setParsedData(data);
    } catch (error) {
      console.error("Analysis error:", error);
      setParsedData({
        status: "error",
        message: "Failed to analyze. Please try again.",
      });
      setStatus((prev) => ({ ...prev, error: "Analysis failed" }));
    } finally {
      setStatus((prev) => ({ ...prev, isAnalyzing: false }));
    }
  };

  const handleCreateAutomation = async () => {
    if (!parsedData) return;
    try {
      const requestBody = {
        text: userInput,
        name: `Auto: ${userInput.slice(0, 30)}...`,
        description:
          parsedData.status === "needs_confirmation"
            ? "Created from natural language input (needs confirmation)"
            : "Created from natural language input",
        ...(parsedData.status === "ready_to_create" && parsedData.parsed_data),
      };

      const response = await fetch(`${API_URL}/automations/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setStatus((prev) => ({
          ...prev,
          success: "Automation created successfully!",
        }));
        setUserInput("");
        setParsedData(null);
        setTimeout(() => setStatus((prev) => ({ ...prev, success: "" })), 3000);
      } else {
        setStatus((prev) => ({
          ...prev,
          error: "Failed to create automation",
        }));
      }
    } catch (error) {
      console.error("Creation error:", error);
      setStatus((prev) => ({
        ...prev,
        error: "Failed to create automation. Please try again.",
      }));
    }
  };

  return (
    <div className="w-screen flex h-screen flex-col bg-background p-4">
      <Header />
      <div className="w-full bg-surface flex flex-1 flex-col justify-between rounded-2xl p-4 ">
        <div className="mt-10">
          <p className="text-center mb-4 md:text-[50px] sm:text-2xl text-base text-textPrimary">
            What do you want to create?
          </p>
          {/* {status.success && <Alert message={status.success} type="success" />}
          {status.error && <Alert message={status.error} type="error" />} */}
          {/* {/* Prompt Form */}
          <Form
            onSubmit={handleAnalyze}
            userInput={userInput}
            setUserInput={setUserInput}
            isLoading={status.isAnalyzing}
          />

          {parsedData && (
            <div className="mt-5 p-4 bg-surfaceAlt rounded-md ">
              <h4 className="font-bold text-textPrimary mb-2">
                Analysis Result:
              </h4>
              <div className="text-sm bg-white p-3 rounded-md border max-h-48 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-mono text-xs">
                  {JSON.stringify(parsedData, null, 2)}
                </pre>
              </div>

              {parsedData.status === "ready_to_create" && (
                <button
                  onClick={handleCreateAutomation}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  🚀 Create Automation
                </button>
              )}

              {parsedData.status === "needs_confirmation" && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-yellow-800 text-sm">
                    🤔 {parsedData.message}
                  </p>
                  <button
                    onClick={handleCreateAutomation}
                    className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  >
                    Confirm & Create
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex w-full px-4">
          <p className="text-xs text-center text-textSecondary ">
            By sending a message, you agree to our Terms of Use and acknowledge
            that you have read and understand our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
