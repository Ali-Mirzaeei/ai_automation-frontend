import React, { useRef } from "react";

const DemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="flex flex-col items-center justify-start flex-grow container mx-auto px-6 pt-4 pb-8">
      <div className="w-full h-[250px] flex items-center overflow-clip max-w-4xl bg-slate-800 rounded-xl border border-slate-700 shadow-2xl shadow-blue-900/20 relative group cursor-pointer">
        <video
          src="/test2.mp4"
          autoPlay
          ref={videoRef}
          loop
          muted
          poster="/test.png"
          className="rounded-lg  w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={handlePlay}
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
          >
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
