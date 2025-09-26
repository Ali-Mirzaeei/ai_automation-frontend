import React from "react";

const TransparencyBox = () => {
  return (
    <section className="bg-sky-900/30 border border-sky-700 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sky-300">
        <span className="font-bold">Note:</span> This is an MVP with limited
        features. We&#39;re working hard to add more! 🚀
      </p>
      <button className="flex-shrink-0 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300">
        Give Feedback
      </button>
    </section>
  );
};

export default TransparencyBox;
