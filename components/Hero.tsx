
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="py-12 md:py-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Powered by Gemini 3.0 & n8n
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        Stop Searching. <br />
        <span className="text-indigo-600">Start Matching.</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Our AI agents scrape LinkedIn in real-time to find jobs that actually fit your profile. 
        Get a prioritized list of opportunities with deep skill-match analysis.
      </p>
    </div>
  );
};

export default Hero;
