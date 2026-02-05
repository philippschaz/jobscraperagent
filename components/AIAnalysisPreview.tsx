
import React from 'react';
import { AnalysisResult } from '../types';

interface AIAnalysisPreviewProps {
  analysis: AnalysisResult | null;
  isLoading: boolean;
}

const AIAnalysisPreview: React.FC<AIAnalysisPreviewProps> = ({ analysis, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-pulse">
        <div className="h-4 bg-slate-100 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-3 bg-slate-50 rounded w-full"></div>
          <div className="h-3 bg-slate-50 rounded w-full"></div>
          <div className="h-3 bg-slate-50 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-md border-l-8 border-l-indigo-600 animate-in slide-in-from-right duration-500">
      <h3 className="text-xs font-black text-indigo-700 uppercase tracking-widest mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
        AI Profiler Intelligence
      </h3>
      
      <p className="text-sm text-slate-900 font-medium mb-5 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
        {analysis.summary}
      </p>

      <div className="mb-5">
        <h4 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-tight">Core Competencies</h4>
        <div className="flex flex-wrap gap-2">
          {analysis.topSkills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-indigo-600 text-white text-[11px] rounded-full font-bold shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h4 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-tight">High-Confidence Roles</h4>
        <div className="flex flex-wrap gap-2">
          {analysis.suggestedTitles.map((title, i) => (
            <span key={i} className="px-2 py-1 bg-white border border-slate-200 text-slate-900 text-[11px] rounded-md font-bold shadow-sm">
              {title}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-inner">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <h4 className="text-[10px] font-black text-amber-700 uppercase">Strategic Advice</h4>
        </div>
        <p className="text-xs text-amber-900 font-semibold leading-snug">
          {analysis.refinement}
        </p>
      </div>
    </div>
  );
};

export default AIAnalysisPreview;
