import React from "react";
import TelegramIcon from "../atom/icons/TelegramIcon";
import GoogleSheetsIcon from "../atom/icons/GoogleSheetsIcon";
import AiIcon from "../atom/icons/AiIcon";
import Link from "next/link";
import { RoutesName } from "@/core/constants/routes";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const UseCaseCard = ({ icon, title, description, href }: UseCaseCardProps) => {
  return (
    <Link
      href={href}
      className="bg-slate-800/50 group border border-slate-700 rounded-xl p-6 flex flex-col gap-4 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20"
    >
      <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 flex-grow">{description}</p>
      <button className="mt-4 text-left font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
        Test it out{" "}
        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
          &rarr;
        </span>
      </button>
    </Link>
  );
};

const UseCasesSection = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful Automation, Simplified
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UseCaseCard
          href={RoutesName.chat}
          icon={<TelegramIcon />}
          title="Instant Notifications"
          description="Get real-time alerts on Telegram or Email for any event in your connected apps."
        />
        <UseCaseCard
          href={RoutesName.chat}
          icon={<GoogleSheetsIcon />}
          title="Auto-Save to Google Sheets"
          description="Automatically log form submissions, user data, or any custom event to a Google Sheet."
        />
        <UseCaseCard
          href={RoutesName.chat}
          icon={<AiIcon />}
          title="AI-Powered Text Processing"
          description="Summarize, translate, or analyze text from any source using the power of AI models."
        />
      </div>
    </section>
  );
};

export default UseCasesSection;
