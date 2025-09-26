import React from "react";

interface HeroSectionProps {
  onScrollClick: () => void;
}

const HeroSection = ({ onScrollClick }: HeroSectionProps) => {
  return (
    <section className="text-center flex flex-col items-center justify-end flex-grow container mx-auto px-6 pb-8 md:pb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Automate Your Workflow, Unleash Your Creativity.
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400">
        Connect your apps and services with powerful, AI-driven automations in
        just a few clicks.
      </p>
      <button
        onClick={onScrollClick}
        className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30"
      >
        Try Now for Free
      </button>
    </section>
  );
};

export default HeroSection;
