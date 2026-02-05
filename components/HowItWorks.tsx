
import React from 'react';

interface HowItWorksProps {
  onBack: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onBack }) => {
  const steps = [
    {
      title: "Intelligent Profiling",
      description: "Gemini 3.0 parses your resume to build a deep skills matrix. It understands context, seniority, and nuance beyond simple keywords.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Real-time Scouting",
      description: "Triggered via n8n, Apify agents navigate top job boards in real-time. We scan for live listings posted within the last 24-48 hours.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Multi-Vector Scoring",
      description: "Every job is scored on two axes: 'Technical Alignment' and 'Cultural/Preference Fit'. Only the top 5% of matches make it to your list.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Sheet Automation",
      description: "Matched roles are pushed to your Google Sheet with direct application links, AI reasoning, and salary data parsed automatically.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      ),
      color: "green"
    }
  ];

  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-12">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:bg-white hover:border-indigo-500 hover:text-indigo-600 transition-all text-slate-900 shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">The Matchmaker Engine</h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Architecture & Data Flow</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
            <div className={`absolute -top-4 -right-4 w-32 h-32 bg-${step.color}-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
            <div className={`relative z-10 w-14 h-14 bg-${step.color}-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${step.color}-100`}>
              {step.icon}
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black px-2 py-0.5 bg-slate-900 text-white rounded uppercase tracking-tighter">Phase 0{index + 1}</span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{step.title}</h2>
              </div>
              <p className="text-slate-800 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-indigo-950 rounded-[2.5rem] p-12 text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full opacity-30 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">Ready to activate your <span className="text-indigo-400">Personal Recruiter?</span></h3>
            <p className="text-indigo-200 font-medium text-lg leading-relaxed">
              Stop clicking and start interviewing. Our bots handle the grunt work, you handle the career growth.
            </p>
          </div>
          <button 
            onClick={onBack}
            className="px-12 py-5 bg-white text-indigo-950 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 whitespace-nowrap"
          >
            Go Back & Launch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
